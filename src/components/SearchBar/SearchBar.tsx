import React, { useRef, useContext } from "react";
import { SearchContext } from "../SearchContext";
import {
  StyledSearchBar,
  SearchForm,
  SearchInput,
  SearchButton,
} from "./styles";

const SearchBar: React.FC = () => {
  const searchElement = useRef<HTMLInputElement>(null);
  const { setSearchTerm, addToSearchHistory } = useContext(SearchContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchElement.current) {
      const newTerm = searchElement.current.value;
      setSearchTerm(newTerm);
      addToSearchHistory(newTerm);
    }
  };

  return (
    <StyledSearchBar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="search"
          placeholder="Search a city"
          ref={searchElement}
        />
        <SearchButton>Search</SearchButton>
      </SearchForm>
    </StyledSearchBar>
  );
};

export default SearchBar;
