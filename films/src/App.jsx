import "./App.css";
import svg from "./assets/search-normal.svg";
import Header from "./components/Layout/Header/Header";
import Search from "./components/Search/Search";
import Title from "./components/Title/Title";
import  Paragraph  from "./components/Paragraph/Paragraph";
import Container from "./components/Layout/Container/Container";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Title>Поиск</Title>
        <Paragraph>
          Введите название фильма, сериала или мультфильма для поиска и
          добавления в избранное.
        </Paragraph>
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            marginTop: "20px",
            maxWidth: "600px",
          }}
        >
          <Search iconSrc={svg} />
          <Button>Искать</Button>
        </div>
      </Container>
    </div>
  );
}

export default App;
