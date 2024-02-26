package com.zemoso.greencommute.service;

import com.zemoso.greencommute.dto.CityDTO;

import java.util.List;

public interface CityService {
    CityDTO findCityByName(String name);
    List<CityDTO> findAllCities();
}
