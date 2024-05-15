import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import { SearchProvider } from "./components/SearchContext.tsx";
import WeatherWrapper from "./components/WeatherWrapper/WeatherWrapper.tsx";
import { StyledWrapper, ContentWrapper } from "./styles.ts";

function App() {
  return (
    <StyledWrapper>
      <SearchProvider>
        <ContentWrapper>
          <Header />
          <SearchBar />
          <WeatherWrapper />
        </ContentWrapper>
        <Footer />
      </SearchProvider>
    </StyledWrapper>
  );
}

export default App;
