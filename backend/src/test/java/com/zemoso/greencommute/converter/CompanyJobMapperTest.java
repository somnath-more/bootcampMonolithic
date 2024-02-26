package com.zemoso.greencommute.converter;


import com.zemoso.greencommute.dto.*;
import com.zemoso.greencommute.entity.*;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class CompanyJobMapperTest {

    @Test
    void dtoToEntity() {

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
        assertEquals(1, companyJobDTO.getId());
    }

    @Test
    void entityToDto() {

        List<JobDTO> jobs= new ArrayList<>();
        SkillDTO skill1 = new SkillDTO(1,"React",jobs);
        List<SkillDTO> skills = new ArrayList<>();
        skills.add(skill1);

        CompanyCommuteDTO companyCommute = new CompanyCommuteDTO(
                new CommuteDTO("Bike"),new CompanyDTO(),"Yes","10-20km");
        List<CompanyCommuteDTO> companyCommutes = new ArrayList<>();
        companyCommutes.add(companyCommute);

        List<User> users=new ArrayList<>();

        CompanyJobDTO companyJobDTO = new CompanyJobDTO(
                1,
                new JobDTO("User Experience Designer",
                        skills),
                new CompanyDTO(1,"Hp", "logo", "Hyd",
                        companyCommutes,
                        new CityDTO("Hyd",100)),
                "Job description",
                "Past week",
                "Internship",
                "Fresher",
                2,users);

        CompanyJob companyJob = new CompanyJobMapper().dtoToEntity(companyJobDTO);
        assertEquals(1,companyJob.getId());
    }

    @Test
    void entityToDtoListTest() {

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

        List<CompanyJobDTO> companyJobDTOList = new CompanyJobMapper().entityToDto(companyJobs);
        assertEquals(1,companyJobDTOList.size());
    }

}
