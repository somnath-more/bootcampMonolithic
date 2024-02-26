package com.zemoso.greencommute.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "company")
@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String companyName;

    @Column(name = "logo")
    private String logo;

    @Column(name = "location")
    private String location;

    @JsonManagedReference
    @OneToMany(mappedBy = "company",
            cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    private List<CompanyCommute> companyCommutes;

    @ManyToOne(cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,CascadeType.REFRESH})
    @JoinColumn(name = "city_id")
    private City city;

}
