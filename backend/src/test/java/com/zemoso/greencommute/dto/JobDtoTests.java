package com.zemoso.greencommute.dto;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class JobDtoTests {

    @Test
    void jobName_Test() {
        JobDTO jobDto = new JobDTO();
        jobDto.setTitle("Designer");
        assertEquals("Designer", jobDto.getTitle());
    }

    @Test
    void jobSkills_Test() {
        SkillDTO skillDto1 =new SkillDTO();
        SkillDTO skillDto2 =new SkillDTO();
        List<SkillDTO> skillDtos = new ArrayList<>();
        skillDtos.add(skillDto1);
        skillDtos.add(skillDto2);
        JobDTO jobDto = new JobDTO();
        jobDto.setSkills(skillDtos);
        assertEquals(2, jobDto.getSkills().size());
    }

    @Test
    void toStringJob_ConvertsToString() {
        assertFalse(new JobDTO().toString().contains("@$"));
    }
}

