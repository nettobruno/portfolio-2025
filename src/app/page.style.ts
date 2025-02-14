import styled, { keyframes } from "styled-components";
import { Heart } from "lucide-react";

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

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
`;

export const Header = styled.header`
  max-width: 100vw;
  height: 100vh;
  background-color: #000;
  background-image: radial-gradient(
    circle at center,
    rgba(92, 156, 84, 0.2) 0%,
    transparent 70%
  ); /* Gradiente */

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
    color: rgba(92, 156, 84, 1);
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
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
`;

export const ProjectsSection = styled.section`
  background-color: #000;
  padding: 10rem 0;
`;

export const GridProjectsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 1.5rem;
`;

export const FormSection = styled.form`
  background-color: #000;
  padding: 10rem 0;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    max-width: 800px;
    margin: 0 auto;
  }
`;

export const SubtitleSection = styled.p`
  font-size: 1rem;
  line-height: inherit;
  color: rgb(156, 163, 175);
  margin-bottom: 1rem;
  text-align: center;
  margin-bottom: 3rem;
`;

export const TrustedBySection = styled.section`
  background-color: #000;
  padding: 2rem 0;

  border-bottom: 1px solid transparent; 
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(156, 163, 175, .3) 50%, rgba(0, 0, 0, 0) 100%);
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 1px; 

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  img {
    padding: 3rem 0;
    transition: 0.3s ease;
    filter: grayscale(100%);

    &:hover {
      filter: grayscale(0%);
      transform: scale(1.1);
    }
  }
`;

export const FooterSection = styled.footer`
  background-color: #000;
  padding: 2rem 0;
  color: rgb(156, 163, 175);

  p {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.5rem;
  }
`;

export const PulsingHeartIcon = styled(Heart)`
  animation: ${pulse} 1.5s infinite;
`;
