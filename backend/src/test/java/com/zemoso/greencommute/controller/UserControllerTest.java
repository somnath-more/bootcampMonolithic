package com.zemoso.greencommute.controller;

import com.zemoso.greencommute.converter.CompanyJobMapper;
import com.zemoso.greencommute.dto.CompanyJobDTO;
import com.zemoso.greencommute.dto.UserDTO;
import com.zemoso.greencommute.entity.CompanyJob;
import com.zemoso.greencommute.entity.User;
import com.zemoso.greencommute.service.implementation.CompanyJobServiceImpl;
import com.zemoso.greencommute.service.implementation.UserServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class UserControllerTest {

    @InjectMocks
    UserController userController;

    @Mock
    private UserServiceImpl userService;

    @Mock
    private CompanyJobServiceImpl companyJobService;

    @Test
    void savedJobWithIdTest() {
        int userId = 1;

        CompanyJob companyJob1=new CompanyJob();
        companyJob1.setId(1);
        CompanyJobDTO companyJob = new CompanyJobMapper().entityToDto(companyJob1);
        List<CompanyJob> companyJobList=new ArrayList<>();
        companyJobList.add(companyJob1);

        UserDTO user=new UserDTO();
        user.setId(userId);
        user.setCompanyJobs(companyJobList);

        when(userService.getSavedJobWithId(userService.findUserById(userId),1)).
                thenReturn(companyJob);

        CompanyJobDTO companyJobDTO = userController.savedJobWithId(1);
        assertEquals(1,companyJobDTO.getId());
    }

    @Test
    void listSavedJobsTest(){
        CompanyJob companyJob1=new CompanyJob();
        companyJob1.setId(1);
        List<CompanyJob> companyJobList=new ArrayList<>();
        companyJobList.add(companyJob1);
        UserDTO user=new UserDTO();
        user.setId(1);
        user.setCompanyJobs(companyJobList);

        when(userService.getAllSavedJobs(userService.findUserById(1))).thenReturn(new CompanyJobMapper().entityToDto(companyJobList));

        List<CompanyJobDTO> companyJobsDTOFetched = userController.listSavedJobs();
        assertEquals(1,companyJobsDTOFetched.size());
    }

    @Test
    void saveCompanyJobTest(){
        int userId = 1;

        User user = new User();
        user.setId(userId);
        CompanyJob companyJob = new CompanyJob();
        companyJob.setId(1);
        List<CompanyJob> companyJobs = new ArrayList<>();
        companyJobs.add(companyJob);
        user.setCompanyJobs(companyJobs);

        assertEquals(1, user.getCompanyJobs().size());

        userController.saveCompanyJob(1);

        verify(userService,times(1)).saveCompanyJob(userService.findUserById(userId),
                companyJobService.findCompanyJobById(1));

    }

    @Test
    void deleteSavedJobTest(){
        int jobId = 1;
        int userId = 1;

        User user = new User();
        user.setId(userId);
        CompanyJob companyJob = new CompanyJob();
        companyJob.setId(1);
        List<CompanyJob> companyJobs = new ArrayList<>();
        companyJobs.add(companyJob);
        user.setCompanyJobs(companyJobs);

        userController.deleteSavedJob(jobId);
        user.getCompanyJobs().remove(companyJob);

        assertEquals(0,user.getCompanyJobs().size());
    }

}
