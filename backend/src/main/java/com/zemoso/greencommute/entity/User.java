package com.zemoso.greencommute.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.zemoso.greencommute.exception.ResourceNotFoundException;
import lombok.*;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "user")
@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String userName;

    @Column(name = "email")
    private String email;

    @Column(name = "phone")
    private long phoneNumber;

    @JsonManagedReference
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,
                    CascadeType.REFRESH,CascadeType.REMOVE})
    @JoinTable(
            name = "saved_jobs",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "company_job_id")
    )
    private List<CompanyJob> companyJobs;

    public void addCompanyJob(CompanyJob companyJob){
        if (companyJobs == null)
            companyJobs= new ArrayList<>();
        companyJobs.add(companyJob);
    }

    public void deleteCompanyJob(CompanyJob companyJob) {
        if(companyJobs==null){
            throw new ResourceNotFoundException("No Saved Job To Be Deleted");
        }
        companyJobs.remove(companyJob);
    }

}
