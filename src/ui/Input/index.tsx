import React from "react";
import { InputProps } from "./input.types";
import { StyledInput } from "./input.style";

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
  return (
    <StyledInput 
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
