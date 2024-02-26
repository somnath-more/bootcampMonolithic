package com.zemoso.greencommute.entity;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
class CommuteTests{

    @Test
    void commuteId_Test() {
        Commute commute = new Commute();
        commute.setId(1);
        assertEquals(1,commute.getId());
    }

    @Test
    void routeOption_Test() {
        Commute commute = new Commute();
        commute.setRouteOption("train");
        assertEquals("train",commute.getRouteOption());
    }

    @Test
    void toStringCommute_ConvertsToString() {
        assertFalse(new Commute().toString().contains("@$"));
    }
}

