package com.zemoso.greencommute.controller;

import com.zemoso.greencommute.converter.CompanyJobMapper;
import com.zemoso.greencommute.dto.CompanyJobDTO;
import com.zemoso.greencommute.entity.*;
import com.zemoso.greencommute.service.implementation.CompanyJobServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class CompanyJobControllerTest {

    @InjectMocks
    CompanyJobController companyJobController;

    @Mock
    private CompanyJobServiceImpl companyJobService;

    @Test
    void getCompanyJobListTest(){
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

        when(companyJobService.findAllCompanyJobs()).thenReturn(new CompanyJobMapper().entityToDto(companyJobs));

        List<CompanyJobDTO> companyJobsFetched = companyJobController.getCompanyJobList();
        assertEquals(1,companyJobsFetched.size());
    }

    @Test
    void getCompanyJobTest(){
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

        CompanyJobDTO companyJobDTO = new CompanyJobMapper().entityToDto(companyJob);

        when(companyJobService.findCompanyJobById(1)).thenReturn(companyJobDTO);

        CompanyJobDTO companyJobFetched = companyJobController.getCompanyJob(1);
        assertEquals(1,companyJobFetched.getId());
    }
}
