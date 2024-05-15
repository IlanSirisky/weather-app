import React from "react";
import {
  ExtraDetailsContainer,
  ExtraDetailsContent,
  StyledData,
  StyledDescription,
} from "./styles";

interface ExtraDetailsProps {
  image: string;
  data: string;
  description: string;
}

const ExtraDetails: React.FC<ExtraDetailsProps> = ({
  image,
  data,
  description,
}) => {
  return (
    <ExtraDetailsContainer>
      <img src={image} alt={description} height={"30px"} />
      <ExtraDetailsContent>
        <StyledData>{data}</StyledData>
        <StyledDescription>{description}</StyledDescription>
      </ExtraDetailsContent>
    </ExtraDetailsContainer>
  );
};

export default ExtraDetails;
