package com.zemoso.greencommute.dto;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class CompanyCommuteDtoTests {

    @Test
    void CommuteId_Test() {
        CompanyCommuteDTO companyCommuteDto = new CompanyCommuteDTO();
        CommuteDTO commuteDto = new CommuteDTO();
        commuteDto.setRouteOption("train");
        companyCommuteDto.setCommute(commuteDto);
        assertEquals("train",companyCommuteDto.getCommute().getRouteOption());
    }

    @Test
    void CompanyId_Test() {
        CompanyCommuteDTO companyCommuteDto = new CompanyCommuteDTO();
        CompanyDTO companyDto = new CompanyDTO();
        companyDto.setLocation("Hyderabad");
        companyCommuteDto.setCompany(companyDto);
        assertEquals("Hyderabad",companyCommuteDto.getCompany().getLocation());
    }

    @Test
    void isGreenCommute_Test() {
        CompanyCommuteDTO companyCommuteDto = new CompanyCommuteDTO();
        companyCommuteDto.setIsGreenCommute("Yes");
        assertEquals("Yes",companyCommuteDto.getIsGreenCommute());
    }

    @Test
    void distance_Test() {
        CompanyCommuteDTO companyCommuteDto = new CompanyCommuteDTO();
        companyCommuteDto.setDistance("0 - 10 kms");
        assertEquals("0 - 10 kms",companyCommuteDto.getDistance());
    }

    @Test
    void toStringCompanyCommute_ConvertsToString() {
        assertFalse(new CompanyCommuteDTO().toString().contains("@$"));
    }
}

