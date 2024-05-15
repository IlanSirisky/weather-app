import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchHistory: string[];
  setSearchHistory: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SearchContext = createContext<SearchContextType>({
  searchTerm: "",
  setSearchTerm: () => {},
  searchHistory: [],
  setSearchHistory: () => {},
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
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  const contextValue = useMemo(
    () => ({
      searchTerm,
      setSearchTerm,
      searchHistory,
      setSearchHistory,
    }),
    [searchTerm, searchHistory]
  );

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};
