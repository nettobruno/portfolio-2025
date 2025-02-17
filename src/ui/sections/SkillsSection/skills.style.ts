import styled from "styled-components";

export const Skills = styled.section`
  background-color: #000;
  padding: 10rem 0;
`;

export const GridSkillsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1.5rem;  
  width: 100%;
  height: 100%;
`;