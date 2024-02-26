package com.zemoso.greencommute.service.implementation;

import com.zemoso.greencommute.entity.Skill;
import com.zemoso.greencommute.exception.ResourceNotFoundException;
import com.zemoso.greencommute.repository.SkillRepository;
import com.zemoso.greencommute.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SkillServiceImpl implements SkillService {

    @Autowired
    private SkillRepository skillRepository;

    @Override
    public int findSkillByName(String name) {
        Optional<Skill> result = skillRepository.findBySkillName(name);
        Skill skill = null;
        if(result.isEmpty()){
            throw new ResourceNotFoundException("Skill name: " + name + " is not found");
        }
        skill = result.get();
        return skill.getJobs().size();
    }
}
