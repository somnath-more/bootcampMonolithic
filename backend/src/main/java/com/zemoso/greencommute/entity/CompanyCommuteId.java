package com.zemoso.greencommute.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class CompanyCommuteId implements Serializable {

    private Commute commute;
    private Company company;

}