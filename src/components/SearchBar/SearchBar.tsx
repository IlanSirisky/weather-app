import React, { useRef, useContext, useState } from "react";
import { SearchContext } from "../SearchContext";
import { List, ListItem, Popover, IconButton, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import {
  StyledSearchBar,
  SearchForm,
  SearchInput,
  SearchButton,
} from "./styles";

const SearchBar: React.FC = () => {
  const searchElement = useRef<HTMLInputElement>(null);
  const { setSearchTerm, addToSearchHistory, searchHistory, setSearchHistory } =
    useContext(SearchContext);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchElement.current) {
      const newTerm = searchElement.current.value;
      setSearchTerm(newTerm);
      addToSearchHistory(newTerm);
      const newHistory = [
        newTerm,
        ...searchHistory.filter((item) => item !== newTerm),
      ].slice(0, 5);
      setSearchHistory(newHistory);
      localStorage.setItem("searchHistory", JSON.stringify(newHistory));
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
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="search"
          placeholder="Search a city"
          inputRef={searchElement}
          onClick={handleClick}
          autoComplete="off"
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}>
        <List>
          {searchHistory.map((item, index) => (
            <ListItem
              key={index}
              onClick={() => {
                if (searchElement.current) searchElement.current.value = item;
                handleClose();
              }}>
              {item}
            </ListItem>
          ))}
        </List>
        <IconButton onClick={handleClearHistory}>
          <Typography variant="body2">Clear History</Typography>
          <ClearIcon />
        </IconButton>
      </Popover>
    </StyledSearchBar>
  );
};

export default SearchBar;
