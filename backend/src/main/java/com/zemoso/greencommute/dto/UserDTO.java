package com.zemoso.greencommute.dto;

import com.zemoso.greencommute.entity.CompanyJob;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import java.util.List;

@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class UserDTO {

    int id;

    private String userName;

    private String email;

    private long phoneNumber;

    @JsonManagedReference
    private List<CompanyJob> companyJobs;

}
