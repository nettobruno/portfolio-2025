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

export const TrustedBySection = styled.section`
  background-color: #000;
  padding: 2rem 0;

  border-bottom: 1px solid transparent;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0%,
    rgba(156, 163, 175, 0.3) 50%,
    rgba(0, 0, 0, 0) 100%
  );
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
