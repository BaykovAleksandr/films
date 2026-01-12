import React from "react";
import "./MovieCard.css";
import StarIcon from "../../assets/star.png";

const MovieCard = ({
  title,
  rating,
  posterUrl,
  isFavorite = false,
  onFavoriteClick,
}) => {
  const handleFavoriteClick = (e) => {
    e.preventDefault();
    if (onFavoriteClick) {
      onFavoriteClick();
    }
  };

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY2IiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDI2NiA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNjYiIGhlaWdodD0iNDAwIiByeD0iMTIiIGZpbGw9IiMxMjE4MjkiLz4KPHRleHQgeD0iMTMzIiB5PSIyMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iI0E4QUVCRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RmlsbSBQb3N0ZXI8L3RleHQ+Cjwvc3ZnPgo=";
  };

  return (
    <div className="movie-card">
      <div className="poster-container">
        <img
          src={posterUrl}
          alt={`Постер фильма "${title}"`}
          className="movie-poster"
          onError={handleImageError}
        />

        <div className="rating-sticker">
          <img src={StarIcon} alt="Рейтинг" className="star-icon" />
          <span className="rating-value">{rating}</span>
        </div>
      </div>

      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>

        <button
          className={`favorite-button ${isFavorite ? "favorite-active" : ""}`}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? "В избранном" : "В избранное"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
