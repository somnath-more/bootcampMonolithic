package com.zemoso.greencommute.entity;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class CompanyTests{

    @Test
    void companyId_Test() {
        Company company = new Company();
        company.setId(1);
        assertEquals(1,company.getId());
    }

    @Test
    void companyName_Test() {
        Company company = new Company();
        company.setCompanyName("Hp");
        assertEquals("Hp",company.getCompanyName());
    }

    @Test
    void companyLogo_Test() {
        Company company = new Company();
        company.setLogo("Hp");
        assertEquals("Hp",company.getLogo());
    }

    @Test
    void companyLocation_Test() {
        Company company = new Company();
        company.setLocation("Hyderabad");
        assertEquals("Hyderabad",company.getLocation());
    }

    @Test
    void companyCity_Test() {
        City city =new City(1,"Hyderabad",191);
        Company company = new Company();
        company.setCity(city);
        assertEquals("Hyderabad", company.getCity().getCityName());
    }

    @Test
    void companyCommutes_Test() {
        CompanyCommute companyCommute1 =new CompanyCommute();
        CompanyCommute companyCommute2 = new CompanyCommute();
        List<CompanyCommute> companyCommutes = new ArrayList<>();
        companyCommutes.add(companyCommute1);
        companyCommutes.add(companyCommute2);
        Company company = new Company();
        company.setCompanyCommutes(companyCommutes);
        assertEquals(2, company.getCompanyCommutes().size());
    }

    @Test
    void toStringCompany_ConvertsToString() {
        assertFalse(new Company().toString().contains("@$"));
    }
}

