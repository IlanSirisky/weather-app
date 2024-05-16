import React, { useRef, useContext, useState, useEffect } from "react";
import { SearchContext } from "../SearchContext";
import HistoryPopover from "../HistoryPopover/HistoryPopover";
import {
  StyledSearchBar,
  SearchFormWrapper,
  SearchForm,
  SearchInput,
  SearchButton,
  ErrorMessage,
} from "./styles";

const SearchBar: React.FC = () => {
  const searchElement = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const { setSearchTerm, searchHistory, setSearchHistory } = useContext(SearchContext);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [popoverWidth, setPopoverWidth] = useState<number | null>(null);
  const [invalidSearch, setInvalidSearch] = useState(false);

  useEffect(() => {
    if (inputRef.current) {
      setPopoverWidth(inputRef.current.offsetWidth);
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchElement.current) {
      const newTerm = searchElement.current.value.trim();
      if (newTerm && isNaN(Number(newTerm))) {
        setSearchTerm(newTerm);
        const newHistory = [
          newTerm,
          ...searchHistory.filter((item) => item !== newTerm),
        ].slice(0, 5);
        setSearchHistory(newHistory);
        setInvalidSearch(false);
      } else {
        setInvalidSearch(true);
      }
      searchElement.current.value = "";
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    if (searchElement.current) {
      searchElement.current.focus();
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClearHistory = () => {
    setSearchHistory([]);
    localStorage.setItem("searchHistory", JSON.stringify([]));
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <StyledSearchBar>
      <SearchFormWrapper>
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            type="search"
            placeholder="Search a city"
            inputRef={searchElement}
            ref={inputRef}
            onClick={handleClick}
            autoComplete="off"
          />
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
        {invalidSearch && (
          <ErrorMessage>
            Invalid search term. Please enter a valid city name.
          </ErrorMessage>
        )}
      </SearchFormWrapper>
      <HistoryPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        searchHistory={searchHistory}
        onItemClick={(item) => {
          if (searchElement.current) searchElement.current.value = item;
          handleClose();
        }}
        onClearHistory={handleClearHistory}
        popoverWidth={popoverWidth}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
