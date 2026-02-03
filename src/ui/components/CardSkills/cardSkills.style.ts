import styled from "styled-components";

export const StyledCardSkills = styled.div`
  background-color: rgb(17, 24, 39);
  display: flex;
  gap: 1rem;
  max-width: 350px;
  width: 100%;

  padding: 1.5rem;
  border-radius: 0.75rem;

  border: 1px solid transparent;

  &:hover {
    background-color: rgb(31, 41, 55);
    border-color: rgba(92, 156, 84, 0.2);
  }

  @media (max-width: 750px) {
    max-width: 100%;
  }
`;

export const BlockIcon = styled.div`
  height: fit-content;
  background-color: rgba(92, 156, 84, 0.1);
  padding: 0.75rem;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  color: rgb(156, 163, 175);
  margin-bottom: 1rem;
  line-height: inherit;
`;

export const BlockTags = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;
