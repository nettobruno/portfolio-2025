import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 0.75rem 3rem;
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
`;
