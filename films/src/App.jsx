import "./App.css";
import svg from "./assets/search-normal.svg";
import Header from "./components/Layout/Header/Header";
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Search iconSrc={svg} />
    </div>
  );
}

export default App;
