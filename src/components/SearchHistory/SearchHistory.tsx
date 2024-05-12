import React, { useContext } from "react";
import { SearchContext } from "../SearchContext";
import SearchItem from "../SearchItem/SearchItem";

const SearchHistory: React.FC = () => {
    const { searchHistory, setSearchHistory} = useContext(SearchContext);

  const handleClearHistory = () => {
    setSearchHistory([]);
    localStorage.setItem("searchHistory", JSON.stringify([]));
  };

  return (
    <>
      <p>Search History:</p>
      <ul>
        {searchHistory.map((searchItem, index) => (
          <SearchItem key={index} cityName={searchItem} />
        ))}
      </ul>
      <br />
      <button onClick={handleClearHistory}>Clear History</button>
    </>
  );
};

export default SearchHistory;
