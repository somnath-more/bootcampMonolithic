package com.zemoso.greencommute.converter;

import com.zemoso.greencommute.dto.UserDTO;
import com.zemoso.greencommute.entity.User;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    private ModelMapper mapper = new ModelMapper();

    public User dtoToEntity(UserDTO userDTO) {
        return mapper.map(userDTO, User.class);
    }

    public UserDTO entityToDto(User user) {
        return mapper.map(user, UserDTO.class);
    }
}