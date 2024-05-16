import React from "react";
import { StyledErrorBlock, ErrorBlockTitle } from "./styles";

interface ErrorBlockProps {
  title: string;
  message: string;
  description?: string;
}

const ErrorBlock: React.FC<ErrorBlockProps> = ({
  title,
  message,
  description,
}) => {
  return (
    <StyledErrorBlock>
      <ErrorBlockTitle>{title}</ErrorBlockTitle>
      <p>{message}</p>
      <p>{description}</p>
    </StyledErrorBlock>
  );
};

export default ErrorBlock;
