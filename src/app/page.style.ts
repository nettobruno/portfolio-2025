import styled, { keyframes } from "styled-components";
import { Heart } from "lucide-react";

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
