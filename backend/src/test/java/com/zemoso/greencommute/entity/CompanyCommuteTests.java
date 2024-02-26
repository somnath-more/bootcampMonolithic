package com.zemoso.greencommute.entity;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class CompanyCommuteTests{

    @Test
    void CompanyCommuteId_Test() {
        CompanyCommute companyCommute = new CompanyCommute();
        Commute commute = new Commute();
        commute.setId(5);
        companyCommute.setCommute(commute);
        assertEquals(5,companyCommute.getCommute().getId());
    }

    @Test
    void CompanyId_Test() {
        CompanyCommute companyCommute = new CompanyCommute();
        Company company = new Company();
        company.setId(7);
        companyCommute.setCompany(company);
        assertEquals(7,companyCommute.getCompany().getId());
    }

    @Test
    void isGreenCommute_Test() {
        CompanyCommute companyCommute = new CompanyCommute();
        companyCommute.setIsGreenCommute("Yes");
        assertEquals("Yes",companyCommute.getIsGreenCommute());
    }

    @Test
    void distance_Test() {
        CompanyCommute companyCommute = new CompanyCommute();
        companyCommute.setDistance("0 - 10 kms");
        assertEquals("0 - 10 kms",companyCommute.getDistance());
    }

    @Test
    void toStringCompanyCommute_ConvertsToString() {
        assertFalse(new CompanyCommute().toString().contains("@$"));
    }
}

