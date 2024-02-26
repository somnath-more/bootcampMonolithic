package com.zemoso.greencommute.service;

import com.zemoso.greencommute.dto.CompanyJobDTO;

import java.util.List;

public interface CompanyJobService {
    CompanyJobDTO findCompanyJobById(int id);
    List<CompanyJobDTO> findAllCompanyJobs();
}