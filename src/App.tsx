import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import { SearchProvider } from "./components/SearchContext.tsx";

function App() {
  return (
    <SearchProvider>
      <Header />
      <SearchBar />
      <WeatherDisplay />
      <Footer />
    </SearchProvider>
  );
}

export default App;
