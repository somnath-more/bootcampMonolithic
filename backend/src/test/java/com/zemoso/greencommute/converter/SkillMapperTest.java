package com.zemoso.greencommute.converter;

import com.zemoso.greencommute.dto.JobDTO;
import com.zemoso.greencommute.dto.SkillDTO;
import com.zemoso.greencommute.entity.Job;
import com.zemoso.greencommute.entity.Skill;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class SkillMapperTest {

    @Test
    void dtoToEntityTest() {
        List<JobDTO> jobs=new ArrayList<>();
        SkillDTO skillDTO=new SkillDTO(1,"React",jobs);
        Skill skill=new SkillMapper().dtoToEntity(skillDTO);
        assertEquals(1,skill.getId());
    }

    @Test
    void entityToDtoTest() {
        List<Job> jobs=new ArrayList<>();
        Skill skill=new Skill(1,"React",jobs);
        SkillDTO skillDTO=new SkillMapper().entityToDto(skill);
        assertEquals(1, skillDTO.getId());
    }

    @Test
    void entityToDtoList() {
        List<Job> jobs = new ArrayList<>();
        Skill skill1 = new Skill(1,"React", jobs);
        Skill skill2 = new Skill(2,"Java", jobs);
        List<Skill> skills = new ArrayList<Skill>();
        skills.add(skill1);
        skills.add(skill2);

        List<SkillDTO> skillDTOList=new SkillMapper().entityToDto(skills);
        assertEquals(2,skillDTOList.size());

    }
}
