import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

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
  width: 100%;
  height: 100vh;
  background-color: #000;
  background-image: radial-gradient(
    circle at center,
    rgba(92, 156, 84, 0.2) 0%,
    transparent 70%
  );

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    text-align: center;
    padding: 1rem;
  }
`;

export const Title = styled(motion.h1)`
  color: white;
  font-size: 6rem;
  line-height: 1;
  font-weight: 600;
  margin-bottom: 1.5rem;

  @media (max-width: 600px) {
    font-size: 4rem;
    margin-bottom: 1rem;
  }
`;

export const JobTitle = styled(motion.h2)`
  color: rgb(156, 163, 175);
  font-size: 1.875rem;
  line-height: 2.25rem;
`;

export const InfoText = styled(motion.span)`
  color: rgb(107, 114, 128);
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-top: 1rem;
`;

export const BlockArrow = styled(motion.div)`
  animation: ${bounce} 1s ease-in-out infinite;
  position: absolute;
  bottom: 20px;
  color: rgb(107, 114, 128);
`;
