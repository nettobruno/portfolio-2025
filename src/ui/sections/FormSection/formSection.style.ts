import styled from "styled-components";
import { motion } from "framer-motion";

export const Form = styled.form`
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

export const SubtitleFormSection = styled(motion.p)`
  font-size: 1rem;
  line-height: inherit;
  color: rgb(156, 163, 175);
  margin-bottom: 1rem;
  text-align: center;
  margin-bottom: 3rem;
`;
