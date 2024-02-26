package com.zemoso.greencommute.service.implementation;

import com.zemoso.greencommute.converter.CityMapper;
import com.zemoso.greencommute.dto.CityDTO;
import com.zemoso.greencommute.entity.City;
import com.zemoso.greencommute.exception.ResourceNotFoundException;
import com.zemoso.greencommute.repository.CityRepository;
import com.zemoso.greencommute.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CityServiceImpl implements CityService {

    @Autowired
    private CityRepository cityRepository;

    @Override
    public List<CityDTO> findAllCities() {
        List<City> cityList = cityRepository.findAll();
        return new CityMapper().entityToDto(cityList);
    }

    @Override
    public CityDTO findCityByName(String name) {
        Optional<City> result = cityRepository.findByCityName(name);
        City city = null;
        if(result.isEmpty()){
            throw new ResourceNotFoundException("City name: " + name + " is not found");
        }
        city = result.get();
        return new CityMapper().entityToDto(city);
    }

}
