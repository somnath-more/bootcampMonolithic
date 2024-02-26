package com.zemoso.greencommute.service;

import com.zemoso.greencommute.dto.CityDTO;
import com.zemoso.greencommute.entity.City;
import com.zemoso.greencommute.exception.ResourceNotFoundException;
import com.zemoso.greencommute.repository.CityRepository;
import com.zemoso.greencommute.service.implementation.CityServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class CityServiceTest {

    @MockBean
    private CityRepository cityRepository;

    @InjectMocks
    private CityServiceImpl cityService;

    @Test
    void findAllCitiesTest() {

        List<City> cities = new ArrayList<>();
        City city1 = new City(1,"Hyd",100);
        City city2 = new City(2,"Delhi",0);
        cities.add(city1);
        cities.add(city2);

        when(cityRepository.findAll()).thenReturn(cities);

        List<CityDTO> citiesFetched = cityService.findAllCities();
        assertEquals(2,citiesFetched.size());

    }

    @Test
    void findCompanyJobByIdTest() {

        City city = new City(1,"Hyd",100);

        Optional<City> city1 = Optional.of(city);
        when(cityRepository.findByCityName("Hyd")).thenReturn(city1);

        CityDTO cityFetched = cityService.findCityByName("Hyd");
        assertEquals("Hyd",cityFetched.getCityName());

    }

    @Test
    void findCompanyJobByIdExceptionTest() {
        Exception exception = assertThrows(ResourceNotFoundException.class, () -> {
            cityService.findCityByName("Kazakastan");
        });
        String expectedMessage = "City name: Kazakastan is not found";
        String actualMessage = exception.getMessage();
        assertEquals(expectedMessage,actualMessage);
    }

}
