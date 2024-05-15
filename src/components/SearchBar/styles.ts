import { TextField, Button, ListItem } from "@mui/material";
import styled from "styled-components";
import { flexRow } from "../../styles";

export const StyledSearchBar = styled(flexRow)`
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
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