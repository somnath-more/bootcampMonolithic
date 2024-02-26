package com.zemoso.greencommute.controller;

import com.zemoso.greencommute.dto.CompanyJobDTO;
import com.zemoso.greencommute.service.CompanyJobService;
import com.zemoso.greencommute.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:8080")
@RequestMapping("v1/saved-jobs")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private CompanyJobService companyJobService;

    @DeleteMapping("/{id}")
    public void deleteSavedJob(@PathVariable("id") int jobId) {
        userService.deleteSavedJob(userService.findUserById(1), jobId);
    }

    @PostMapping("/{id}")
    public void saveCompanyJob(@PathVariable("id") int companyJobId){
        int userId = 1;
        userService.saveCompanyJob(userService.findUserById(userId),
                companyJobService.findCompanyJobById(companyJobId));
    }

    @GetMapping("/{id}")
    public CompanyJobDTO savedJobWithId(@PathVariable("id") int companyJobId) {
        int userId = 1;
        return userService.getSavedJobWithId(userService.findUserById(userId),
                companyJobId);
    }

    @GetMapping("")
    public List<CompanyJobDTO> listSavedJobs() {
        int userId = 1;
        return userService.getAllSavedJobs(userService.findUserById(userId));
    }
}
