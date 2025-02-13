import styled, { keyframes } from "styled-components";

// Definindo a animação de balanço
const bounce = keyframes`
   0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Header = styled.header`
  max-width: 100vw;
  height: 100vh;
  background-color: #000;
  background-image: radial-gradient(circle at center, rgba(92, 156, 84, 0.2) 0%, transparent 70%);  /* Gradiente */
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: white;
  font-size: 6rem;
  line-height: 1;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

export const JobTitle = styled.h2`
  color: rgb(156, 163, 175);
  font-size: 1.875rem;
  line-height: 2.25rem;
`;

export const InfoText = styled.span`
  color: rgb(107, 114, 128);
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: 1rem;
`;

export const BlockArrow = styled.div`
  animation: ${bounce} 1s ease-in-out infinite;
  position: absolute;
  bottom: 20px;
`;

export const AboutSection = styled.section`
  background-color: #000;
  padding: 10rem 0;

  h2 {
    color: white;
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 700;
  }

  p {
    color: #e5e7eb;
    font-size: 1.125rem;
    line-height: 1.625rem;
    margin: 24px 0;
  }

  span {
    color: rgba(92,156,84,1);
    font-size: 1rem;
    line-height: inherit;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const SkillsSection = styled.section`
  background-color: #000;
  padding: 10rem 0;
`;

export const TitleSection = styled.h2`
  font-size: 2.25rem;
  line-height: 2.5rem;
  color: white;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;

export const GridSkillsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

export const ProjectsSection = styled.section`
  background-color: #000;
  padding: 10rem 0;
`;

export const GridProjectsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;