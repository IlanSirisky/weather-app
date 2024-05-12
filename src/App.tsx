import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchDataWeather from "./components/SearchDataWeather/SearchDataWeather";
import { SearchProvider } from "./components/SearchContext.tsx";
import UserLocationWeather from "./components/UserLocationWeather/UserLocationWeather.tsx";
import SearchHistory from "./components/SearchHistory/SearchHistory.tsx";

function App() {
  return (
    <SearchProvider>
      <Header />
      <SearchBar />
      <SearchDataWeather />
      <UserLocationWeather />
      <SearchHistory />
      <Footer />
    </SearchProvider>
  );
}

export default App;
