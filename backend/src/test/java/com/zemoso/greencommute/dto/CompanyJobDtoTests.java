package com.zemoso.greencommute.dto;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class CompanyJobDtoTests {

    @Test
    void companyJobId_Test() {
        CompanyJobDTO companyJobDto=new CompanyJobDTO();
        companyJobDto.setId(1);
        assertEquals(1,companyJobDto.getId());
    }

    @Test
    void jobDescription_Test() {
        CompanyJobDTO companyJobDto=new CompanyJobDTO();
        companyJobDto.setJobDescription("Web Designer JobDTO");
        assertEquals("Web Designer JobDTO",companyJobDto.getJobDescription());
    }

    @Test
    void datePosted_Test() {
        CompanyJobDTO companyJobDto=new CompanyJobDTO();
        companyJobDto.setDatePosted("Past 24hrs");
        assertEquals("Past 24hrs",companyJobDto.getDatePosted());
    }

    @Test
    void jobType_Test() {
        CompanyJobDTO companyJobDto=new CompanyJobDTO();
        companyJobDto.setJobType("Full-Time");
        assertEquals("Full-Time",companyJobDto.getJobType());
    }

    @Test
    void experienceLevel_Test() {
        CompanyJobDTO companyJobDto=new CompanyJobDTO();
        companyJobDto.setExperienceLevel("Fresher");
        assertEquals("Fresher",companyJobDto.getExperienceLevel());
    }

    @Test
    void days_Test() {
        CompanyJobDTO companyJobDto=new CompanyJobDTO();
        companyJobDto.setDays(2);
        assertEquals(2,companyJobDto.getDays());
    }

    @Test
    void job_Test() {
        JobDTO jobDto = new JobDTO();
        jobDto.setTitle("Designer");
        CompanyJobDTO companyJobDto=new CompanyJobDTO();
        companyJobDto.setJob(jobDto);
        assertEquals("Designer",companyJobDto.getJob().getTitle());
    }

    @Test
    void company_Test() {
        CompanyDTO companyDto = new CompanyDTO();
        companyDto.setCompanyName("Hp");
        CompanyJobDTO companyJobDto=new CompanyJobDTO();
        companyJobDto.setCompany(companyDto);
        assertEquals("Hp",companyJobDto.getCompany().getCompanyName());
    }

    @Test
    void toStringCompanyJob_ConvertsToString() {
        assertFalse(new CompanyJobDTO().toString().contains("@$"));
    }
}
