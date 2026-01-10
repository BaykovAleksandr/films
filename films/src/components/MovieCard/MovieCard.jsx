import React from "react";
import styles from "./MovieCard.module.css";
import StarIcon from "../../assets/star.png";
import cn from 'classnames';

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
    <div className={styles["movie-card"]}>
      <div className={styles["poster-container"]}>
        <img
          src={posterUrl}
          alt={`Постер фильма "${title}"`}
          className={styles["movie-poster"]}
          onError={handleImageError}
        />

        <div className={styles["rating-sticker"]}>
          <img src={StarIcon} alt="Рейтинг" className={styles["star-icon"]} />
          <span className={styles["rating-value"]}>{rating}</span>
        </div>
      </div>

      <div className={styles["movie-info"]}>
        <h3 className={styles["movie-title"]}>{title}</h3>

        <button
          className={cn(styles["favorite-button"], {[styles["favorite-active"]]: isFavorite})}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? "В избранном" : "В избранное"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
