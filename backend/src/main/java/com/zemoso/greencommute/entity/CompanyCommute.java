package com.zemoso.greencommute.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "company_commute")
@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
@IdClass(CompanyCommuteId.class)
public class CompanyCommute {

    @Id
    @ManyToOne
    @MapsId("commuteId")
    private Commute commute;

    @Id
    @ManyToOne
    @JsonBackReference
    @MapsId("companyId")
    private Company company;

    @Column(name = "is_green_commute")
    private String isGreenCommute;

    @Column(name = "distance")
    private String distance;

}
