package com.zemoso.greencommute.converter;

import com.zemoso.greencommute.dto.CityDTO;
import com.zemoso.greencommute.entity.City;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CityMapper {

    private final ModelMapper mapper = new ModelMapper();

    public City dtoToEntity(CityDTO cityDTO){
        return mapper.map(cityDTO, City.class);
    }

    public CityDTO entityToDto(City city) {
        return mapper.map(city, CityDTO.class);
    }

    public List<CityDTO> entityToDto(List<City> cities)
    {
        return cities.stream().map(this::entityToDto).collect(Collectors.toList());
    }

}