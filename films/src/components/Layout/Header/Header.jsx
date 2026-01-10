import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../../assets/logo.svg";


const Header = () => {
  const [activeLink, setActiveLink] = useState("my-movies");
  const moviesCount = 2;

  const navItems = [
    { id: "search", label: "Поиск фильмов" },
    { id:"my-movies", label: "Мои фильмы" },
    { id: "exit", label: "Выйти" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles['header-container']}>
        <div className={styles["logo-section"]}>
          <img src={logo} alt="Логотип" className={styles["logo-image"]} />
        </div>

        <nav className={styles["nav-menu"]}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`${styles["nav-link"]} ${activeLink === item.id ? styles.active : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(item.id);
              }}
            >
              {item.label}

              {item.id === "my-movies" && (
                <span className={styles["movies-count"]}>{moviesCount}</span>
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
