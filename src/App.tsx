import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import { SearchProvider } from "./components/SearchContext.tsx";
import UserLocationWeather from "./components/WeatherWrapper/WeatherWrapper.tsx";
import SearchHistory from "./components/SearchHistory/SearchHistory.tsx";
import { StyledWrapper } from "./styles.ts";

function App() {
  return (
    <StyledWrapper>
      <SearchProvider>
        <Header />
        <SearchBar />
        <UserLocationWeather />
        <SearchHistory />
        <Footer />
      </SearchProvider>
    </StyledWrapper>
  );
}

export default App;
