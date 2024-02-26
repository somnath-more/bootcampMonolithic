package com.zemoso.greencommute.converter;

import com.zemoso.greencommute.dto.CompanyJobDTO;
import com.zemoso.greencommute.entity.CompanyJob;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class CompanyJobMapper {

    private final ModelMapper mapper = new ModelMapper();

    public CompanyJob dtoToEntity(CompanyJobDTO companyJobDTO){
        return mapper.map(companyJobDTO, CompanyJob.class);
    }

    public CompanyJobDTO entityToDto(CompanyJob companyJob) {
        return mapper.map(companyJob, CompanyJobDTO.class);
    }

    public List<CompanyJobDTO> entityToDto(List<CompanyJob> companyJobs)
    {
        return companyJobs.stream().map(this::entityToDto).collect(Collectors.toList());
    }
}