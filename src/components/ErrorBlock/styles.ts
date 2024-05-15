import styled from "styled-components";

export const StyledErrorBlock = styled.div`
  background-color: #f0d9e5;
  padding: 1rem;
  border-radius: 20px;
  margin: 10px;
  color: #890b35;
  display: flex;
  gap: 2rem;
  align-items: center;
  text-align: left;
  width: 40vw;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    width: 75vw;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }
`;

export const ErrorBlockTitle = styled.h2`
  color: inherit;
  font-size: 1.25rem;
  margin: 0;
`;
