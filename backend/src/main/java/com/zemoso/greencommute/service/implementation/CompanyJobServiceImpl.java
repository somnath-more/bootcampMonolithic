package com.zemoso.greencommute.service.implementation;

import com.zemoso.greencommute.converter.CompanyJobMapper;
import com.zemoso.greencommute.dto.CompanyJobDTO;
import com.zemoso.greencommute.entity.CompanyJob;
import com.zemoso.greencommute.exception.ResourceNotFoundException;
import com.zemoso.greencommute.repository.CompanyJobRepository;

import com.zemoso.greencommute.service.CompanyJobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyJobServiceImpl implements CompanyJobService {

    @Autowired
    private CompanyJobRepository companyJobRepository;

    @Override
    public List<CompanyJobDTO> findAllCompanyJobs() {
        List<CompanyJob> companyJobList = companyJobRepository.findAll();
        return new CompanyJobMapper().entityToDto(companyJobList);
    }

    @Override
    public CompanyJobDTO findCompanyJobById(int id) {
        Optional<CompanyJob> result = companyJobRepository.findById(id);
        CompanyJob companyJob = null;
        if(result.isEmpty()){
            throw new ResourceNotFoundException("Company Job with id: " + id + " is not found");
        }
        companyJob = result.get();
        return new CompanyJobMapper().entityToDto(companyJob);
    }
}