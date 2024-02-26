package com.zemoso.greencommute.entity;

import com.zemoso.greencommute.exception.ResourceNotFoundException;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserTests{

    @Test
    void userId_Test() {
        User user = new User();
        user.setId(1);
        assertEquals(1,user.getId());
    }

    @Test
    void userName_Test() {
        User user = new User();
        user.setUserName("Sara Joseph");
        assertEquals("Sara Joseph", user.getUserName());
    }

    @Test
    void email_Test() {
        User user = new User();
        user.setEmail("jack@artist.com");
        assertEquals("jack@artist.com",user.getEmail());
    }

    @Test
    void phoneNumber_Test() {
        User user = new User();
        user.setPhoneNumber(1234567890);
        assertEquals(1234567890,user.getPhoneNumber());
    }

    @Test
    void CompanyJobUser_Test() {
        User user = new User();
        CompanyJob companyJob1 = new CompanyJob();
        CompanyJob companyJob2 = new CompanyJob();
        List<CompanyJob> companyJobList = new ArrayList<>();
        companyJobList.add(companyJob1);
        user.setCompanyJobs(companyJobList);
        user.addCompanyJob(companyJob2);
        user.deleteCompanyJob(companyJob2);
        assertEquals(1,user.getCompanyJobs().size());
    }

    @Test
    void addCompanyJobUser_Test() {
        User user = new User();
        CompanyJob companyJob = new CompanyJob();
        user.addCompanyJob(companyJob);
        assertEquals(1,user.getCompanyJobs().size());
    }

    @Test
    void deleteCompanyJobUser_ExceptionTest() {
        User user = new User();
        CompanyJob companyJob = new CompanyJob();
        Exception exception = assertThrows(ResourceNotFoundException.class, () -> {
            user.deleteCompanyJob(companyJob);
        });
        String expectedMessage = "No Saved Job To Be Deleted";
        String actualMessage = exception.getMessage();
        assertEquals(expectedMessage,actualMessage);
    }

    @Test
    void toStringUser_ConvertsToString() {
        assertFalse(new User().toString().contains("@$"));
    }
}
