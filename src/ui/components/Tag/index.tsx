import React from "react";
import { TagProps } from "./tag.types";
import { StyledTag } from "./tag.style";

const Tag: React.FC<TagProps> = ({ text }) => {
  return (
    <StyledTag>{text}</StyledTag>
  );
};

export default Tag;
