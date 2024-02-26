package com.zemoso.greencommute.dto;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class CommuteDtoTests {

    @Test
    void routeOption_Test() {
        CommuteDTO commute = new CommuteDTO();
        commute.setRouteOption("train");
        assertEquals("train",commute.getRouteOption());
    }

    @Test
    void toStringCommute_ConvertsToString() {
        assertFalse(new CommuteDTO().toString().contains("@$"));
    }
}

