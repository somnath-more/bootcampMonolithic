package com.zemoso.greencommute.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "city")
@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class City {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String cityName;

    @Column(name = "aqi_value")
    private int aqiValue;

}
