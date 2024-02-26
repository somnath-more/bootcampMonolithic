package com.zemoso.greencommute.dto;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class CompanyDtoTests {

    @Test
    void companyId_Test() {
        CompanyDTO companyDto = new CompanyDTO();
        companyDto.setId(1);
        assertEquals(1,companyDto.getId());
    }

    @Test
    void companyName_Test() {
        CompanyDTO companyDto = new CompanyDTO();
        companyDto.setCompanyName("Hp");
        assertEquals("Hp",companyDto.getCompanyName());
    }

    @Test
    void companyLogo_Test() {
        CompanyDTO companyDto = new CompanyDTO();
        companyDto.setLogo("Hp");
        assertEquals("Hp",companyDto.getLogo());
    }

    @Test
    void companyLocation_Test() {
        CompanyDTO companyDto = new CompanyDTO();
        companyDto.setLocation("Hyderabad");
        assertEquals("Hyderabad",companyDto.getLocation());
    }

    @Test
    void companyCity_Test() {
        CityDTO cityDto =new CityDTO("Hyderabad",191);
        CompanyDTO companyDto = new CompanyDTO();
        companyDto.setCity(cityDto);
        assertEquals("Hyderabad", companyDto.getCity().getCityName());
    }

    @Test
    void companyCommutes_Test() {
        CompanyCommuteDTO companyCommuteDto1 =new CompanyCommuteDTO();
        CompanyCommuteDTO companyCommuteDto2 = new CompanyCommuteDTO();
        List<CompanyCommuteDTO> companyCommuteDtos = new ArrayList<>();
        companyCommuteDtos.add(companyCommuteDto1);
        companyCommuteDtos.add(companyCommuteDto2);
        CompanyDTO companyDto = new CompanyDTO();
        companyDto.setCompanyCommutes(companyCommuteDtos);
        assertEquals(2, companyDto.getCompanyCommutes().size());
    }

    @Test
    void toStringCompany_ConvertsToString() {
        assertFalse(new CompanyDTO().toString().contains("@$"));
    }
}

