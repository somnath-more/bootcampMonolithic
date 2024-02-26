package com.zemoso.greencommute.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import java.util.List;

@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class SkillDTO {

    private int id;

    private String skillName;

    @JsonBackReference
    List<JobDTO> jobs;

}