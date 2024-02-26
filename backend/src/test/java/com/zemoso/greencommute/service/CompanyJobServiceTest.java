package com.zemoso.greencommute.service;

import com.zemoso.greencommute.dto.CompanyJobDTO;
import com.zemoso.greencommute.entity.*;
import com.zemoso.greencommute.exception.ResourceNotFoundException;
import com.zemoso.greencommute.repository.CompanyJobRepository;
import com.zemoso.greencommute.service.implementation.CompanyJobServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class CompanyJobServiceTest {

    @MockBean
    private CompanyJobRepository companyJobRepository;

    @InjectMocks
    private CompanyJobServiceImpl companyJobService;

    @Test
    void findAllCompanyJobsTest() {

        List<CompanyJob> companyJobs= new ArrayList<>();

        List<Job> jobs = new ArrayList<>();
        Skill skill1 = new Skill(1,"React", jobs);
        List<Skill> skills = new ArrayList<Skill>();
        skills.add(skill1);

        CompanyCommute companyCommute = new CompanyCommute(
                new Commute(1,"Bike"),new Company(),"Yes","10-20km");
        List<CompanyCommute> companyCommutes = new ArrayList<>();
        companyCommutes.add(companyCommute);

        List<User> users = new ArrayList<>();

        CompanyJob companyJob = new CompanyJob(
                1,
                new Job(1, "User Experience Designer",
                        skills),
                new Company(1, "Hp", "logo", "Hyd",
                        companyCommutes,
                        new City(1,"Hyd",100)),
                "Job description",
                "Past week",
                "Internship",
                "Fresher",
                2,
                users);

        companyJobs.add(companyJob);

        when(companyJobRepository.findAll()).thenReturn(companyJobs);

        List<CompanyJobDTO> companyJobsFetched = companyJobService.findAllCompanyJobs();
        assertEquals(1,companyJobsFetched.size());

    }

    @Test
    void findCompanyJobByIdTest() {

        List<Job> jobs = new ArrayList<>();
        Skill skill1 = new Skill(1,"React", jobs);
        List<Skill> skills = new ArrayList<Skill>();
        skills.add(skill1);

        CompanyCommute companyCommute = new CompanyCommute(
                new Commute(1,"Bike"),new Company(),"Yes","10-20km");
        List<CompanyCommute> companyCommutes = new ArrayList<>();
        companyCommutes.add(companyCommute);

        List<User> users = new ArrayList<>();

        CompanyJob companyJob = new CompanyJob(
                1,
                new Job(1, "User Experience Designer",
                        skills),
                new Company(1, "Hp", "logo", "Hyd",
                        companyCommutes,
                        new City(1,"Hyd",100)),
                "Job description",
                "Past week",
                "Internship",
                "Fresher",
                2,
                users);

        Optional<CompanyJob> companyJob1 = Optional.of(companyJob);
        when(companyJobRepository.findById(1)).thenReturn(companyJob1);

        CompanyJobDTO companyJobFetched = companyJobService.findCompanyJobById(1);
        assertEquals(1,companyJobFetched.getId());

    }

    @Test
    void findCompanyJobByIdExceptionTest() {
        Exception exception = assertThrows(ResourceNotFoundException.class, () -> {
            companyJobService.findCompanyJobById(3);
        });
        String expectedMessage = "Company Job with id: 3 is not found";
        String actualMessage = exception.getMessage();
        assertEquals(expectedMessage,actualMessage);
    }

}
