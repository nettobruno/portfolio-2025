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

  .embla {
    overflow: hidden;
  }

  .embla__viewport {
    overflow: hidden;
    width: 100%;
  }

  .embla__container {
    display: flex;
    align-items: center;
    gap: 5rem;
    padding: 2.5rem 0;
  }

  .embla__slide {
    flex: 0 0 auto;
  }

  .embla__slide img {
    display: block;
    transition: 0.3s ease;
    filter: grayscale(100%);

    &:hover {
      filter: grayscale(0%);
      transform: scale(1.1);
    }
  }

  @media (max-width: 1150px) {
    padding: 2rem;

    .embla__container {
      gap: 2rem;
    }
  }

  @media (max-width: 950px) {
    padding: 2rem;
  }

  @media (max-width: 500px) {
    .embla__container {
      gap: 1.5rem;
      padding: 2rem 0;
    }
  }
`;
