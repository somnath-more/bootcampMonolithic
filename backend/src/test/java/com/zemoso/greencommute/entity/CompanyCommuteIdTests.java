package com.zemoso.greencommute.entity;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class CompanyCommuteIdTests{

    @Test
    void company_Test() {
        CompanyCommuteId companyCommuteId = new CompanyCommuteId();
        Company company = new Company();
        companyCommuteId.setCompany(company);
        assertEquals(company,companyCommuteId.getCompany());
    }

    @Test
    void commute_Test() {
        CompanyCommuteId companyCommuteId = new CompanyCommuteId();
        Commute commute = new Commute();
        companyCommuteId.setCommute(commute);
        assertEquals(commute,companyCommuteId.getCommute());
    }

    @Test
    void companyCommute_Test() {
        Company company = new Company();
        Commute commute = new Commute();
        CompanyCommuteId companyCommuteId = new CompanyCommuteId(commute,company);
        assertEquals(commute,companyCommuteId.getCommute());
    }
}

