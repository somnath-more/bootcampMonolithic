package com.zemoso.greencommute.service.implementation;

import com.zemoso.greencommute.converter.CompanyJobMapper;
import com.zemoso.greencommute.converter.UserMapper;
import com.zemoso.greencommute.entity.CompanyJob;
import com.zemoso.greencommute.entity.User;
import com.zemoso.greencommute.dto.UserDTO;
import com.zemoso.greencommute.exception.ResourceNotFoundException;
import com.zemoso.greencommute.dto.CompanyJobDTO;
import com.zemoso.greencommute.repository.CompanyJobRepository;
import com.zemoso.greencommute.repository.UserRepository;
import com.zemoso.greencommute.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    public static final String ERROR_MESSAGE1 = "Saved Company Job with id: ";
    public static final String ERROR_MESSAGE2 = " is not found";

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CompanyJobRepository companyJobRepository;

    @Override
    public UserDTO findUserById(int id) {
        Optional<User> result = userRepository.findById(id);
        User user= null;
        if(result.isEmpty()){
            throw new ResourceNotFoundException("User with id: " + id + ERROR_MESSAGE2);
        }
        user = result.get();
        return new UserMapper().entityToDto(user);
    }

   @Override
    public void deleteSavedJob(UserDTO user, int  companyJobId) {

        User userEntity = new UserMapper().dtoToEntity(user);
        CompanyJob companyJob=companyJobRepository.getById(companyJobId);
        userEntity.deleteCompanyJob(companyJob);
        userRepository.saveAndFlush(userEntity);

    }

    @Override
    public void saveCompanyJob(UserDTO user, CompanyJobDTO companyJob) {
        User userEntity = new UserMapper().dtoToEntity(user);
        userEntity.addCompanyJob(new CompanyJobMapper().dtoToEntity(companyJob));
        userRepository.save(userEntity);
    }

    @Override
    public CompanyJobDTO getSavedJobWithId(UserDTO user, int companyJobById) {
        List<CompanyJob> savedJobs =user.getCompanyJobs();
        CompanyJob companyJob=null;
        for(CompanyJob c:savedJobs){
            if(c.getId()==companyJobById){
                companyJob=c;
                break;
            }
        }
        if(companyJob==null){
            throw new ResourceNotFoundException(ERROR_MESSAGE1 + companyJobById + ERROR_MESSAGE2);
        }
        return new CompanyJobMapper().entityToDto(companyJob);
    }

    @Override
    public List<CompanyJobDTO> getAllSavedJobs(UserDTO user) {
        return new CompanyJobMapper().entityToDto(user.getCompanyJobs());
    }

}
