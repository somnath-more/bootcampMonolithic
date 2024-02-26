package com.zemoso.greencommute.converter;


import com.zemoso.greencommute.dto.UserDTO;
import com.zemoso.greencommute.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class UserMapperTest {

    @Test
    void entityToDto_convertsUserEntityToArtistDto() {
        User user=new User();
        user.setId(1);
        UserDTO userDTO=new UserMapper().entityToDto(user);
        assertEquals(1, userDTO.getId());
    }

    @Test
    void DtoToEntity_convertsArtistDtoToArtistEntity() {
        UserDTO userDto = new UserDTO();
        userDto.setId(1);
        User user = new UserMapper().dtoToEntity(userDto);
        assertEquals(1,user.getId());
    }
}