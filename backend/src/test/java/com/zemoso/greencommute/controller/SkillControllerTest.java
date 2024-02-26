package com.zemoso.greencommute.controller;

import com.zemoso.greencommute.service.implementation.SkillServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;


@SpringBootTest
@ExtendWith(MockitoExtension.class)
class SkillControllerTest {

    @InjectMocks
    SkillController skillController;

    @Mock
    private SkillServiceImpl skillService;

    @Test
    void  findSkillWithNameTest() {

        int value=0;
        when(skillService.findSkillByName("React")).thenReturn(value);
        int result=skillService.findSkillByName("React");
        int value1=skillController.getSkill("React");
        assertEquals(value1,result);
    }
}
