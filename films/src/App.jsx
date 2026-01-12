import "./App.css";
import { useState } from 'react';
import svg from "./assets/search-normal.svg";
import Header from "./components/Layout/Header/Header";
import Search from "./components/Search/Search";
import Title from "./components/Title/Title";
import  Paragraph  from "./components/Paragraph/Paragraph";
import Container from "./components/Layout/Container/Container";
import Button from "./components/Button/Button";
import MovieCard from './components/MovieCard/MovieCard';
import poster from './assets/poster.png'

function App() {
const [favorites, setFavorites] = useState([]);

const movies = [
  {
    id: 1,
    title: "Интерстеллар",
    rating: 8.6,
    year: 2014,
    genre: "Фантастика",
    posterUrl:
      poster,
  },
  {
    id: 2,
    title: "Начало",
    rating: 8.8,
    year: 2010,
    genre: "Фантастика",
    posterUrl:
      poster,
  },
  {
    id: 3,
    title: "Побег из Шоушенка",
    rating: 9.3,
    year: 1994,
    genre: "Драма",
    posterUrl:
      poster,
  },
  {
    id: 4,
    title: "Крестный отец",
    rating: 9.2,
    year: 1972,
    genre: "Криминал",
    posterUrl:
      poster,
  },
];

 const handleFavoriteClick = (movieId) => {
   setFavorites((prev) =>
     prev.includes(movieId)
       ? prev.filter((id) => id !== movieId)
       : [...prev, movieId]
   );
 };


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
            marginBottom: "50px"
          }}
        >
          <Search iconSrc={svg} />
          <Button>Искать</Button>
        </div>
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              rating={movie.rating}
              posterUrl={movie.posterUrl}
              isFavorite={favorites.includes(movie.id)}
              onFavoriteClick={() => handleFavoriteClick(movie.id)}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
