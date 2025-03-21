import React from "react";
import { LoadingProps } from "./loading.types";
import { StyledLoading, Spinner } from "./loading.style";

const Loading: React.FC<LoadingProps> = ({ loading }) => {
  if (!loading) return null;

  return (
    <StyledLoading>
      <Spinner />
    </StyledLoading>
  );
};

export default Loading;
