import styled from "styled-components";

export const Projects = styled.section`
  background-color: #000;
  padding: 5rem 0;
`;

export const GridProjectsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;

  .under-construction {
    position: relative;
  }

  .under-construction::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(6px);
    border-radius: 0.5rem;
    z-index: 1;
  }

  .construction-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.7);
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
    z-index: 2;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    align-items: center;
    justify-items: center;

    & > *:nth-child(n + 3) {
      display: none;
    }
  }
`;
