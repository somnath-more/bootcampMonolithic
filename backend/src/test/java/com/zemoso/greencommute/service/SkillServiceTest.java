package com.zemoso.greencommute.service;

import com.zemoso.greencommute.entity.Job;
import com.zemoso.greencommute.entity.Skill;
import com.zemoso.greencommute.exception.ResourceNotFoundException;
import com.zemoso.greencommute.repository.SkillRepository;
import com.zemoso.greencommute.service.implementation.SkillServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
class SkillServiceTest {

    @MockBean
    SkillRepository skillRepository;

    @InjectMocks
    SkillServiceImpl skillService;

    @Test
    void  findSkillWithNameTest() {
        List<Job> jobs=new ArrayList<>();
        Skill skill1=new Skill(1,"React",jobs);

        Optional<Skill> skill2 = Optional.of(skill1);
        when(skillRepository.findBySkillName("React")).thenReturn(skill2);
        Optional<Skill> result=skillRepository.findBySkillName("React");

        int value=skillService.findSkillByName("React");
        assertEquals(value,result.get().getJobs().size());
    }

    @Test
    void findSkillWithNameExceptionTest() {
        Exception exception = assertThrows(ResourceNotFoundException.class, () -> {
            skillService.findSkillByName("React");
        });
        String expectedMessage = "Skill name: React is not found";
        String actualMessage = exception.getMessage();
        assertEquals(expectedMessage,actualMessage);
    }
}
