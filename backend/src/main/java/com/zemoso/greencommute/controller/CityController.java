package com.zemoso.greencommute.controller;

import com.zemoso.greencommute.dto.CityDTO;
import com.zemoso.greencommute.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:8080")
@RequestMapping("/v1/aqi")
public class CityController {

    @Autowired
    private CityService cityService;

    @GetMapping("")
    public List<CityDTO> getAllCities(){
        return cityService.findAllCities();
    }

    @GetMapping("/{name}")
    public CityDTO getCity(@PathVariable("name") String name){
        return cityService.findCityByName(name);
    }

}
