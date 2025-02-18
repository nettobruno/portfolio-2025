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

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    z-index: 1;
  }

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    z-index: 2;
    text-align: center;
  }

  .modal h3 {
    font-size: 1.25rem;
    color: white;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .modal p {
    font-size: 1rem;
    color: rgb(156, 163, 175);
  }
`;
