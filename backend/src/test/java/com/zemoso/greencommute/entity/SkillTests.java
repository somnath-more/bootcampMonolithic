package com.zemoso.greencommute.entity;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class SkillTests{

    @Test
    void skillId_Test() {
        Skill skill = new Skill();
        skill.setId(1);
        assertEquals(1,skill.getId());
    }

    @Test
    void skillName_Test() {
        Skill skill = new Skill();
        skill.setSkillName("Java");
        assertEquals("Java", skill.getSkillName());
    }

    @Test
    void skillJobs_Test() {
        Job job1 =new Job();
        Job job2 = new Job();
        List<Job> jobs = new ArrayList<>();
        jobs.add(job1);
        jobs.add(job2);
        Skill skill = new Skill();
        skill.setJobs(jobs);
        assertEquals(2, skill.getJobs().size());
    }

    @Test
    void toStringSkill_ConvertsToString() {
        assertFalse(new Skill().toString().contains("@$"));
    }
}

