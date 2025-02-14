import React from "react";
import { InputProps } from "./input.types";
import { StyledInput, StyledTextarea } from "./input.style";

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  value,
  onChange,
  isTextarea = false,
}) => {
  return isTextarea ? (
    <StyledTextarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  ) : (
    <StyledInput
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
