import styled from "styled-components";
import { flexRow } from "../../styles";

export const StyledWeatherWrapper = styled(flexRow)<{ $search: string }>`
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: ${({ $search }) => ($search ? "space-around" : "center")};
  display: flex;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
