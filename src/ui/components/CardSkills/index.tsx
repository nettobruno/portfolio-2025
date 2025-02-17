import React from "react";
import { CardSkillsProps } from "./cardSkills.types";
import {
  StyledCardSkills,
  BlockIcon,
  Title,
  Description,
  BlockTags,
} from "./cardSkills.style";
import Tag from "../Tag";

const CardSkills: React.FC<CardSkillsProps> = ({
  icon,
  title,
  description,
  tags,
}) => {
  return (
    <StyledCardSkills>
      <BlockIcon>{icon}</BlockIcon>

      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <BlockTags>
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </BlockTags>
      </div>
    </StyledCardSkills>
  );
};

export default CardSkills;
