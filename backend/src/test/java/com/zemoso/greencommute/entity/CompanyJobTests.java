package com.zemoso.greencommute.entity;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class CompanyJobTests {

    @Test
    void companyJobId_Test() {
        CompanyJob companyJob=new CompanyJob();
        companyJob.setId(1);
        assertEquals(1,companyJob.getId());
    }

    @Test
    void jobDescription_Test() {
        CompanyJob companyJob=new CompanyJob();
        companyJob.setJobDescription("Web Designer Job");
        assertEquals("Web Designer Job",companyJob.getJobDescription());
    }

    @Test
    void datePosted_Test() {
        CompanyJob companyJob=new CompanyJob();
        companyJob.setDatePosted("Past 24hrs");
        assertEquals("Past 24hrs",companyJob.getDatePosted());
    }

    @Test
    void jobType_Test() {
        CompanyJob companyJob=new CompanyJob();
        companyJob.setJobType("Full-Time");
        assertEquals("Full-Time",companyJob.getJobType());
    }

    @Test
    void experienceLevel_Test() {
        CompanyJob companyJob=new CompanyJob();
        companyJob.setExperienceLevel("Fresher");
        assertEquals("Fresher",companyJob.getExperienceLevel());
    }

    @Test
    void days_Test() {
        CompanyJob companyJob=new CompanyJob();
        companyJob.setDays(2);
        assertEquals(2,companyJob.getDays());
    }

    @Test
    void job_Test() {
        Job job = new Job();
        job.setTitle("Designer");
        CompanyJob companyJob=new CompanyJob();
        companyJob.setJob(job);
        assertEquals("Designer",companyJob.getJob().getTitle());
    }

    @Test
    void company_Test() {
        Company company = new Company();
        company.setCompanyName("Hp");
        CompanyJob companyJob=new CompanyJob();
        companyJob.setCompany(company);
        assertEquals("Hp",companyJob.getCompany().getCompanyName());
    }

    @Test
    void userCompanyJob_Test() {
        CompanyJob companyJob=new CompanyJob();
        User user1 = new User();
        User user2 = new User();
        List<User> users = new ArrayList<>();
        users.add(user1);
        users.add(user2);
        companyJob.setUsers(users);
        assertEquals(2,companyJob.getUsers().size());
    }

    @Test
    void toStringCompanyJob_ConvertsToString() {
        assertFalse(new CompanyJob().toString().contains("@$"));
    }
}
