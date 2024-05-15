import React from "react";
import { StyledErrorBlock, ErrorBlockTitle } from "./styles";

const ErrorBlock: React.FC<{ title: string; message: string }> = ({
  title,
  message,
}) => {
  return (
    <StyledErrorBlock>
      <ErrorBlockTitle>{title}</ErrorBlockTitle>
      <p>{message}</p>
    </StyledErrorBlock>
  );
};

export default ErrorBlock;
