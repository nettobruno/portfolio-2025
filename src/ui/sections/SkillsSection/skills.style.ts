import styled from "styled-components";

export const Skills = styled.section`
  background-color: #000;
  padding: 5rem 0;
`;

export const GridSkillsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    align-items: center;
    justify-items: center;
  }
`;
