package com.zemoso.greencommute.entity;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class CityTests{

    @Test
    void cityId_Test() {
        City city = new City();
        city.setId(1);
        assertEquals(1,city.getId());
    }

    @Test
    void cityName_Test() {
        City city = new City();
        city.setCityName("Delhi");
        assertEquals("Delhi",city.getCityName());
    }

    @Test
    void cityAqi_Test() {
        City city = new City();
        city.setAqiValue(141);
        assertEquals(141,city.getAqiValue());
    }

    @Test
    void toStringCity_ConvertsToString() {
        assertFalse(new City().toString().contains("@$"));
    }
}

