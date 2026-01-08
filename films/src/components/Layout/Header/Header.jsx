import React, { useState } from "react";
import "./Header.css";


const Header = () => {
  const [activeLink, setActiveLink] = useState("movies");
  const moviesCount = 2;

  const navItems = [
    { id: "search", label: "Поиск фильмов" },
    { id:"my-movies", label: "Мои фильмы" },
    { id: "exit", label: "Выйти" },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <img src="src\assets\logo.svg" alt="Логотип" className="logo-image" />
        </div>

        <nav className="nav-menu">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeLink === item.id ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(item.id);
              }}
            >
              {item.label}

              {item.id === "my-movies" && (
                <span className="movies-count">{moviesCount}</span>
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
