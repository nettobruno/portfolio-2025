import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  max-width: 100vw;
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

  button {
    width: fit-content;
    margin: 0 auto;
  }
`;

export const BlockContent = styled(motion.div)`
  text-align: center;
`;

export const TitlePage = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 2.25rem;
  line-height: 2.5rem;
  margin-bottom: 1rem;
`;

export const SubtitlePage = styled.p`
  color: rgb(156, 163, 175);
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-bottom: 2rem;
`;
