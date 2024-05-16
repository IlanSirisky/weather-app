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
  const { setSearchTerm, searchHistory, setSearchHistory } = useContext(SearchContext);
  const searchElement = useRef<HTMLInputElement>(null);

  // States and refrences for the popover and error message
  const inputRef = useRef<HTMLDivElement>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [popoverWidth, setPopoverWidth] = useState<number | null>(null);
  const [invalidSearch, setInvalidSearch] = useState(false);

  // Get the width of the input element to set the width of the popover
  useEffect(() => {
    if (inputRef.current) {
      setPopoverWidth(inputRef.current.offsetWidth);
    }
  }, []);

  // Validate the search term and update the search history once the form is submitted
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

  // Open the popover
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);

  };

  // Close the popover
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Clear the search history in the context and local storage
  const handleClearHistory = () => {
    setSearchHistory([]);
    localStorage.setItem("searchHistory", JSON.stringify([]));
  };

  // Set the anchor element for the popover
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
