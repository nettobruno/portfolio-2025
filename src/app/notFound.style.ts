import styled from "styled-components";
import { motion } from "framer-motion";
import { Rocket, Stars } from "lucide-react";

export const Container = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  background-color: #000;
  background-image: radial-gradient(
    circle at center,
    rgba(92, 156, 84, 0.2) 0%,
    transparent 70%
  );

  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    width: fit-content;
    margin: 0 auto;
    z-index: 10;
  }

  overflow: hidden;
  position: relative;
`;

export const Content = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`;

export const TitlePage = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.5rem;
  margin-bottom: 1rem;
  z-index: 5;
`;

export const SubtitlePage = styled.p`
  color: rgb(156, 163, 175);
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-bottom: 2rem;
  z-index: 5;
`;

export const MotionRocket = styled(motion.div)`
  margin-bottom: 2rem;
  display: inline-block;
  z-index: 5;
`;

export const MotionSpan = styled(motion.span)`
  display: inline-block;
  color: white;
  opacity: 0.2;
`;

export const MotionRocketWrapper = styled.div`
  position: relative;
  z-index: 5;
`;

export const StyledRocket = styled(Rocket)`
  width: 6rem;
  height: 6rem;
  color: rgba(92, 156, 84, 1);
  z-index: 5;
`;

export const StyledStars = styled(Stars)`
  width: 2rem;
  height: 2rem;
  color: rgba(92, 156, 84, 0.5);
  z-index: 5;
`;
