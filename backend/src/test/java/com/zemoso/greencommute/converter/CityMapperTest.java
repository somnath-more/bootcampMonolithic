package com.zemoso.greencommute.converter;

import com.zemoso.greencommute.dto.CityDTO;
import com.zemoso.greencommute.entity.City;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class CityMapperTest {

    @Test
    void dtoToEntity() {
        City city = new City(1,"Hyd",100);
        CityDTO cityDTO = new CityMapper().entityToDto(city);
        assertEquals("Hyd",cityDTO.getCityName());
    }

    @Test
    void entityToDto() {
        CityDTO cityDTO = new CityDTO("Hyd",100);
        City city = new CityMapper().dtoToEntity(cityDTO);
        assertEquals("Hyd",city.getCityName());
    }

    @Test
    void entityToDtoListTest() {
        List<City> cities = new ArrayList<>();
        City city1 = new City(1,"Hyd",100);
        City city2 = new City(2,"Delhi",0);
        cities.add(city1);
        cities.add(city2);
        List<CityDTO> cityDTOList = new CityMapper().entityToDto(cities);
        assertEquals(2,cityDTOList.size());
    }

}
