import React, { createContext, useState, useEffect, ReactNode } from "react";

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchHistory: string[];
  setSearchHistory: React.Dispatch<React.SetStateAction<string[]>>;
  addToSearchHistory: (term: string) => void;
}

export const SearchContext = createContext<SearchContextType>({
  searchTerm: "",
  setSearchTerm: () => {},
  searchHistory: [],
  setSearchHistory: () => {},
  addToSearchHistory: () => {},
});

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState<string[]>(() => {
    const storedSearchHistory = localStorage.getItem("searchHistory");
    return storedSearchHistory ? JSON.parse(storedSearchHistory) : [];
  });

  useEffect(() => {
    const storedSearchHistory = localStorage.getItem("searchHistory");
    if (storedSearchHistory) {
      setSearchHistory(JSON.parse(storedSearchHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  const addToSearchHistory = (term: string) => {
    setSearchHistory((prevHistory) => [term, ...prevHistory]);
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        searchHistory,
        setSearchHistory,
        addToSearchHistory,
      }}>
      {children}
    </SearchContext.Provider>
  );
};
