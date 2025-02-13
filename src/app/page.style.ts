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