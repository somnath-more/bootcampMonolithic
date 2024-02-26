package com.zemoso.greencommute.dto;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import java.util.List;

@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class JobDTO {

    private String title;

    @JsonManagedReference
    List<SkillDTO> skills;

}