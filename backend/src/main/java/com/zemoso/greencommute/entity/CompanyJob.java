package com.zemoso.greencommute.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "company_job")
@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class CompanyJob {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @MapsId("job_id")
    private Job job;

    @ManyToOne
    @MapsId("company_id")
    private Company company;

    @Column(name = "job_description")
    private String jobDescription;

    @Column(name = "date_posted")
    private String datePosted;

    @Column(name = "job_type")
    private String jobType;

    @Column(name = "experience_level")
    private String experienceLevel;

    @Column(name = "days")
    private int days;

    @JsonBackReference
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,
                    CascadeType.REFRESH,CascadeType.REMOVE})
    @JoinTable(
            name = "saved_jobs",
            joinColumns = @JoinColumn(name = "company_job_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    private List<User> users;

}


