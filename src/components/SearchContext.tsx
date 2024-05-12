import React, { createContext, useState, ReactNode } from "react";

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchHistory: string[];
  addToSearchHistory: (term: string) => void;
}

export const SearchContext = createContext<SearchContextType>({
  searchTerm: "",
  setSearchTerm: () => {},
  searchHistory: [],
  addToSearchHistory: () => {},
});

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const addToSearchHistory = (term: string) => {
    setSearchHistory((prevHistory) => [term, ...prevHistory]);
  };

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, searchHistory, addToSearchHistory }}>
      {children}
    </SearchContext.Provider>
  );
};
