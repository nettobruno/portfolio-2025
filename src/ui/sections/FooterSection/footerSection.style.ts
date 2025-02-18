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

export const Footer = styled.footer`
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
