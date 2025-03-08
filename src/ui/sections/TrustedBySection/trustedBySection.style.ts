import styled from "styled-components";

export const TrustedBy = styled.section`
  background-color: #000;
  padding: 5rem 0;

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

  @media (max-width: 1150px) {
    padding: 2rem;

    div {
      gap: 1rem;
    }
  }

  @media (max-width: 950px) {
    padding: 2rem;

    div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
      justify-items: center;
    }
  }

  @media (max-width: 500px) {
    div {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
