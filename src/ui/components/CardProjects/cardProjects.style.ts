import styled from "styled-components";

export const StyledCardProjects = styled.div`
  background-color: rgb(17, 24, 39);
  max-width: 350px;
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;

  img {
    border-top-right-radius: 0.75rem;
    border-top-left-radius: 0.75rem;
  }
`;

export const Content = styled.div`
  padding: 1.5rem;
`;

export const Title = styled.h2`
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  color: rgb(156, 163, 175);
  margin-bottom: 1rem;
  line-height: inherit;
`;

export const BlockTags = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const BlockUrls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;

  a {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  a:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;
