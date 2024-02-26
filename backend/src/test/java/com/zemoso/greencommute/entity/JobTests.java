package com.zemoso.greencommute.entity;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class JobTests{

    @Test
    void jobId_Test() {
        Job job = new Job();
        job.setId(1);
        assertEquals(1,job.getId());
    }

    @Test
    void jobName_Test() {
        Job job = new Job();
        job.setTitle("Designer");
        assertEquals("Designer", job.getTitle());
    }

    @Test
    void jobSkills_Test() {
        Skill skill1 =new Skill();
        Skill skill2 =new Skill();
        List<Skill> skills = new ArrayList<>();
        skills.add(skill1);
        skills.add(skill2);
        Job job = new Job();
        job.setSkills(skills);
        assertEquals(2, job.getSkills().size());
    }

    @Test
    void toStringJob_ConvertsToString() {
        assertFalse(new Job().toString().contains("@$"));
    }
}

