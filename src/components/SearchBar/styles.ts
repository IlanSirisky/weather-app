import { TextField, Button, ListItem } from "@mui/material";
import styled from "styled-components";
import { flexColumn } from "../../styles";

export const StyledSearchBar = styled(flexColumn)`
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  padding-top: 10px;
  position: relative;
`;

export const SearchFormWrapper = styled(flexColumn)`
  width: 100%;
  align-items: center;
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

export const SearchInput = styled(TextField)`
  flex: 1;
  padding: 10px;
  border-radius: 20px 0 0 20px;
`;

export const SearchButton = styled(Button)`
  padding: 8px 16px;
  color: white;
  border: 1px solid #007bff;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  font-size: 12px;
`;

export const SearchListItem = styled(ListItem)`
  &:hover {
    background-color: #f0f0f0;
    cursor: pointer;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 12px;
  margin-top: 10px;
`;
