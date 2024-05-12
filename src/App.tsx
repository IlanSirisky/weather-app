import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <ul>
        <li>History item 1</li>
        <li>History item 2</li>
        <li>History item 3</li>
      </ul>
      <Footer />
    </>
  );
}

export default App;
