import React from "react";
import { TitleSectionProps } from "./titlesection.types";
import { StyledTitleSection } from "./titlesection.style";

const TitleSection: React.FC<TitleSectionProps> = ({ text }) => {
  return (
    <StyledTitleSection>{text}</StyledTitleSection>
  );
};

export default TitleSection;
