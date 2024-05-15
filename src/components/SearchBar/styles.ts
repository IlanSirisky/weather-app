import styled from "styled-components";
import { flexColumn} from "../../styles";

export const StyledSearchBar = styled(flexColumn)`
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SearchForm = styled.form`
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 20px 0 0 20px;
  outline: none;
`;

export const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  font-size: 12px;
`;