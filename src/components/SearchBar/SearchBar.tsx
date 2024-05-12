import { useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../../utils/http";

const SearchBar: React.FC = () => {
  const searchElement = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["weather", { search: searchTerm }],
    queryFn: ({ signal }) => fetchWeather({ signal, searchTerm }),
    enabled: searchTerm !== "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchElement.current) {
      setSearchTerm(searchElement.current.value);
    }
  };

  let content = <p>Please enter a city name</p>;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (isError) {
    content = (
      <>
        <p>An error occured</p>
        <p>{error.message || "Failed to fetch the weather"}</p>
      </>
    );
  }

  if (data) {
    content = (
      <>
        <h2>Location: {data.location.name}</h2>
        <p>Temperature: {data.current.temp_c}°C</p>
      </>
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Search a city" ref={searchElement} />
        <button>Search</button>
      </form>
      {content}
    </div>
  );
};

export default SearchBar;
