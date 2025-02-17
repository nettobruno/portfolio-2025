import styled, { css } from "styled-components";

const baseInputStyles = css`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: 2px solid rgb(31, 41, 55);
  background-color: rgb(17, 24, 39);
  border-radius: 4px;
  outline: none;
  transition: all 0.3s ease;
  width: 100%;
  color: white;

  &:focus {
    border-color: #4CAF50;
    transform: scale(1.05);
  }

  &:not(:placeholder-shown) {
    border-color: #4CAF50;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const StyledInput = styled.input`
  ${baseInputStyles}
`;

export const StyledTextarea = styled.textarea`
  ${baseInputStyles} 
  height: 150px; 
  resize: vertical;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;
