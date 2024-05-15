import styled from "styled-components";
import { flexColumn, flexRow } from "../../styles";

export const ExtraDetailsContainer = styled(flexRow)`
align-items: center;
`;
export const ExtraDetailsContent = styled(flexColumn)`
    margin-left: 10px;
`;

export const StyledData = styled.p`
    font-size: 1rem;
    margin: 0;
    font-weight: bold;
`;

export const StyledDescription = styled.p`
    font-size: 0.8rem;
    margin-top: 0;
    margin-bottom: 10px;
`;