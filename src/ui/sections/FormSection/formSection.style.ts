import styled from "styled-components";
import { motion } from "framer-motion";

export const BlockForm = styled.section`
  background-color: #000;
  padding: 5rem 0;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    max-width: 800px;
    margin: 0 auto;
  }

  @media (max-width: 800px) {
    padding: 5rem 2rem;
  }
  position: relative;
`;

export const SubtitleFormSection = styled(motion.p)`
  font-size: 1rem;
  line-height: inherit;
  color: rgb(156, 163, 175);
  margin-bottom: 1rem;
  text-align: center;
  margin-bottom: 3rem;
`;

export const ContainerSocialMedia = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  margin-top: 2rem;
`;

export const ItemSocialMedia = styled.a`
  color: rgb(156, 163, 175);
  border: 1px solid rgb(156, 163, 175);
  border-radius: 2rem;
  height: 40px;
  width: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: rgba(92,156,84,1);
    border-color: rgba(92,156,84,1);
  }
`;

