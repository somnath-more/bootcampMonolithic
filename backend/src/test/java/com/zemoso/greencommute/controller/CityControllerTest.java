package com.zemoso.greencommute.controller;

import com.zemoso.greencommute.converter.CityMapper;
import com.zemoso.greencommute.dto.CityDTO;
import com.zemoso.greencommute.entity.City;
import com.zemoso.greencommute.service.implementation.CityServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


@SpringBootTest
@ExtendWith(MockitoExtension.class)
class CityControllerTest {

    @InjectMocks
    CityController cityController;

    @Mock
    private CityServiceImpl cityService;

    @Test
    void  findCityWithNameTest() {
        City city = new City(1,"Delhi",121);
        when(cityService.findCityByName("Delhi")).thenReturn(new CityMapper().entityToDto(city));
        CityDTO cityDTO =cityController.getCity("Delhi");
        assertEquals("Delhi",cityDTO.getCityName());
    }

    @Test
    void  findCityListTest() {
        List<City> cityList = new ArrayList<>();
        City city = new City(1,"Delhi",121);
        cityList.add(city);
        when(cityService.findAllCities()).thenReturn(new CityMapper().entityToDto(cityList));
        List<CityDTO> cityDTO =cityController.getAllCities();
        assertEquals(1,cityDTO.size());
    }
}
