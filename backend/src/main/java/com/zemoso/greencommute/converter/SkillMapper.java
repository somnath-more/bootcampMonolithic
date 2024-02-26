package com.zemoso.greencommute.converter;

import com.zemoso.greencommute.dto.SkillDTO;
import com.zemoso.greencommute.entity.Skill;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class SkillMapper {

    private final ModelMapper mapper = new ModelMapper();

    public Skill dtoToEntity(SkillDTO skillDTO){
        return mapper.map(skillDTO, Skill.class);
    }

    public SkillDTO entityToDto(Skill skill) {
        return mapper.map(skill, SkillDTO.class);
    }

    public List<SkillDTO> entityToDto(List<Skill> cities)
    {
        return cities.stream().map(this::entityToDto).collect(Collectors.toList());
    }

}