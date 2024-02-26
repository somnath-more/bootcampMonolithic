package com.zemoso.greencommute.service;

import com.zemoso.greencommute.converter.CompanyJobMapper;
import com.zemoso.greencommute.converter.UserMapper;
import com.zemoso.greencommute.dto.CompanyJobDTO;
import com.zemoso.greencommute.dto.UserDTO;
import com.zemoso.greencommute.entity.CompanyJob;
import com.zemoso.greencommute.entity.User;
import com.zemoso.greencommute.exception.ResourceNotFoundException;
import com.zemoso.greencommute.repository.CompanyJobRepository;
import com.zemoso.greencommute.repository.UserRepository;
import com.zemoso.greencommute.service.implementation.UserServiceImpl;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @MockBean
    UserRepository userRepository;

    @MockBean
    CompanyJobRepository companyJobRepository;

    @InjectMocks
    UserServiceImpl userService;

    @Test
    void  getSavedJobWithId_Test() {
        CompanyJob companyJob1=new CompanyJob();
        companyJob1.setId(1);
        CompanyJob companyJob2=new CompanyJob();
        companyJob2.setId(2);
        List<CompanyJob> companyJobList=new ArrayList<>();
        companyJobList.add(companyJob1);
        companyJobList.add(companyJob2);
        UserDTO user=new UserDTO();
        user.setId(1);
        user.setCompanyJobs(companyJobList);
        assertEquals(1,userService.getSavedJobWithId(user,1).getId());
    }

    @Test
    void  getSavedJobWithId_ExceptionTest() {
        CompanyJob companyJob1=new CompanyJob();
        companyJob1.setId(1);
        CompanyJob companyJob2=new CompanyJob();
        companyJob2.setId(2);
        List<CompanyJob> companyJobList=new ArrayList<>();
        companyJobList.add(companyJob1);
        companyJobList.add(companyJob2);
        UserDTO user=new UserDTO();
        user.setId(1);
        user.setCompanyJobs(companyJobList);
        Exception exception = assertThrows(ResourceNotFoundException.class, () -> {
            userService.getSavedJobWithId(user,4);
        });
        String expectedMessage = "Saved Company Job with id: 4 is not found";
        String actualMessage = exception.getMessage();
        assertEquals(expectedMessage,actualMessage);
    }

    @Test
    void findUserById_Test() {
        User user=new User();
        user.setId(1);

        Optional<User> user1 = Optional.of(user);
        when(userRepository.findById(1)).thenReturn(user1);

        UserDTO userFetched = userService.findUserById(1);
        assertEquals(1,userFetched.getId());
    }

    @Test
    void  getUserWithId_ExceptionTest() {
        Exception exception = assertThrows(ResourceNotFoundException.class, () -> {
            userService.findUserById(8);
        });
        String expectedMessage = "User with id: 8 is not found";
        String actualMessage = exception.getMessage();
        assertEquals(expectedMessage,actualMessage);
    }

    @Test
    void getAllSavedJobsTest() {
        CompanyJob companyJob1=new CompanyJob();
        companyJob1.setId(1);
        List<CompanyJob> companyJobList=new ArrayList<>();
        companyJobList.add(companyJob1);
        UserDTO user=new UserDTO();
        user.setId(1);
        user.setCompanyJobs(companyJobList);
        List<CompanyJobDTO> companyJobsFetched = userService.getAllSavedJobs(user);
        assertEquals(1,companyJobsFetched.size());
    }

    @Test
    void saveJobTest() {
        User user = new User();
        user.setId(1);
        CompanyJob companyJob = new CompanyJob();
        companyJob.setId(1);
        List<CompanyJob> companyJobs = new ArrayList<>();
        companyJobs.add(companyJob);
        user.setCompanyJobs(companyJobs);
        userService.saveCompanyJob(new UserMapper().entityToDto(user),
                new CompanyJobMapper().entityToDto(companyJob));
        userRepository.save(user);
        System.out.println(user.getCompanyJobs());
        assertEquals(1, user.getCompanyJobs().size());
        userRepository.save(user);
        verify(userRepository,times(2)).save(user);
    }

    @Test
    void deleteSavedJobTest() {
        User user = new User();
        user.setId(1);
        CompanyJob companyJob = new CompanyJob();
        companyJob.setId(1);
        List<CompanyJob> companyJobs = new ArrayList<>();
        companyJobs.add(companyJob);
        user.setCompanyJobs(companyJobs);
        when(companyJobRepository.getById(1)).thenReturn(companyJob);
        userService.deleteSavedJob(new UserMapper().entityToDto(user), 1);
        user.getCompanyJobs().remove(companyJob);
        assertEquals(0,user.getCompanyJobs().size());
    }
}