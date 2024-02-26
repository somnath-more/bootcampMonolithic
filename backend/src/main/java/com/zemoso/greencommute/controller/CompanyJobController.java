package com.zemoso.greencommute.controller;

import com.zemoso.greencommute.dto.CompanyJobDTO;
import com.zemoso.greencommute.service.CompanyJobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:8080")
@RequestMapping("v1/jobs")
public class CompanyJobController {

    @Autowired
    private CompanyJobService companyJobService;

    @GetMapping("")
    public List<CompanyJobDTO> getCompanyJobList(){
        return companyJobService.findAllCompanyJobs();
    }

    @GetMapping("/{id}")
    public CompanyJobDTO getCompanyJob(@PathVariable("id") int id){
        return companyJobService.findCompanyJobById(id);
    }

}
