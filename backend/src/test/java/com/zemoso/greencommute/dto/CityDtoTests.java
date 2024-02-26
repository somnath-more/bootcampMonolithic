package com.zemoso.greencommute.dto;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class CityDtoTests {
    
    @Test
    void cityName_Test() {
        CityDTO cityDto = new CityDTO();
        cityDto.setCityName("Delhi");
        assertEquals("Delhi",cityDto.getCityName());
    }

    @Test
    void cityAqi_Test() {
        CityDTO cityDto = new CityDTO();
        cityDto.setAqiValue(141);
        assertEquals(141,cityDto.getAqiValue());
    }

    @Test
    void toStringCity_ConvertsToString() {
        assertFalse(new CityDTO().toString().contains("@$"));
    }
}

