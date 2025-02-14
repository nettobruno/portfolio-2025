import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: rgb(92, 156, 84);
  border-radius: 0.5rem;

  padding: 0.75rem 1.5rem;
  width: 100%;

  color: white;
  font-weight: 500;
  font-size: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  &:hover {
    background-color: rgba(92,156,84,0.8);
    cursor: pointer;
  }
`;
