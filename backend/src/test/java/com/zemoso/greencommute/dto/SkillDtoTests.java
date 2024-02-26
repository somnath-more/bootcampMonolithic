package com.zemoso.greencommute.dto;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class SkillDtoTests {

    @Test
    void skillName_Test() {
        SkillDTO skillDto = new SkillDTO();
        skillDto.setSkillName("Java");
        assertEquals("Java", skillDto.getSkillName());
    }

    @Test
    void skillJobs_Test() {
        JobDTO jobDto1 =new JobDTO();
        JobDTO jobDto2 = new JobDTO();
        List<JobDTO> jobDtos = new ArrayList<>();
        jobDtos.add(jobDto1);
        jobDtos.add(jobDto2);
        SkillDTO skillDto = new SkillDTO();
        skillDto.setJobs(jobDtos);
        assertEquals(2, skillDto.getJobs().size());
    }

    @Test
    void toStringSkill_ConvertsToString() {
        assertFalse(new SkillDTO().toString().contains("@$"));
    }
}

