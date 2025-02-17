import styled from "styled-components";

export const Projects = styled.section`
  background-color: #000;
  padding: 10rem 0;
`;

export const GridProjectsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 1.5rem;
`;