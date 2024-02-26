package com.zemoso.greencommute.service;

import com.zemoso.greencommute.dto.CompanyJobDTO;
import com.zemoso.greencommute.dto.UserDTO;

import java.util.List;

public interface UserService {

    UserDTO findUserById(int id);

    void deleteSavedJob(UserDTO user, int companyJobId);

    void saveCompanyJob(UserDTO user, CompanyJobDTO companyJob);

    CompanyJobDTO getSavedJobWithId(UserDTO userById, int companyJobId);

    List<CompanyJobDTO> getAllSavedJobs(UserDTO userById);
}
