import React from "react";

interface SearchItemProps {
  cityName: string;
}

const SearchItem: React.FC<SearchItemProps> = ({ cityName }) => {
  return <li>{cityName}</li>;
};

export default SearchItem;
