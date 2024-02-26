package com.zemoso.greencommute.dto;

import com.zemoso.greencommute.entity.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import java.util.List;

@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class CompanyJobDTO {

    private int id;

    private JobDTO job;

    private CompanyDTO company;

    private String jobDescription;

    private String datePosted;

    private String jobType;

    private String experienceLevel;

    private int days;

    @JsonBackReference
    private List<User> users;

}