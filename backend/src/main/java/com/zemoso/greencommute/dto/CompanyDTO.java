package com.zemoso.greencommute.dto;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import java.util.List;

@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class CompanyDTO {

    private int id;

    private String companyName;

    private String location;

    private String logo;

    @JsonManagedReference
    private List<CompanyCommuteDTO> companyCommutes;

    private CityDTO city;

}