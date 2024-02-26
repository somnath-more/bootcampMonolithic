package com.zemoso.greencommute.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class CompanyCommuteDTO {

    private CommuteDTO commute;

    @JsonBackReference
    private CompanyDTO company;

    private String isGreenCommute;

    private String distance;

}