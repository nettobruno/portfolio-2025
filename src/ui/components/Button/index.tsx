import React from "react";
import { ButtonProps } from "./button.types";
import { StyledButton } from "./button.style";

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
