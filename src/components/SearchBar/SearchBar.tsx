import React, { useRef, useContext } from "react";
import { SearchContext } from "../SearchContext";

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
    <div>
      <form onSubmit={handleSubmit}>
        <p>Please enter a city name</p>
        <input type="search" placeholder="Search a city" ref={searchElement} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
