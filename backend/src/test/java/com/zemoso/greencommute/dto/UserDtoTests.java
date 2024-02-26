package com.zemoso.greencommute.dto;

import com.zemoso.greencommute.entity.CompanyJob;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.ArrayList;
import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class UserDtoTests {

    @Test
    void userId_Test() {
        UserDTO userDTO=new UserDTO();
        userDTO.setId(1);
        assertEquals(1,userDTO.getId());
    }

    @Test
    void userName_Test() {
        UserDTO userDTO=new UserDTO();
        userDTO.setUserName("Sara Joseph");
        assertEquals("Sara Joseph",userDTO.getUserName());
    }

    @Test
    void email_Test() {
        UserDTO userDTO=new UserDTO();
        userDTO.setEmail("sarajoseph@gmail.com");
        assertEquals("sarajoseph@gmail.com",userDTO.getEmail());
    }

    @Test
    void phoneNumber_Test() {
        UserDTO userDTO=new UserDTO();
        userDTO.setPhoneNumber(123456789);
        assertEquals(123456789,userDTO.getPhoneNumber());
    }

    @Test
    void companyJobs_Test() {
        CompanyJob companyJob1=new CompanyJob();
        CompanyJob companyJob2=new CompanyJob();
        List<CompanyJob> companyJobList=new ArrayList<>();
        companyJobList.add(companyJob1);
        companyJobList.add(companyJob2);
        UserDTO userDTO=new UserDTO();
        userDTO.setCompanyJobs(companyJobList);
        assertEquals(2,userDTO.getCompanyJobs().size());
    }



}