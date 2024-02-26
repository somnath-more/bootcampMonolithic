package com.zemoso.greencommute.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "commute")
@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class Commute {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "route_option")
    private String routeOption;

}
