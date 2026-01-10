import React, { useState } from "react";
import styles from "./Search.module.css";

const Search = ({
  placeholder = "Введите название",
  iconSrc,
  onSearch,
  ...props
}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(value);
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      {iconSrc && <img src={iconSrc} alt="" className={styles["search-icon"]} />}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles["search-input"]}
        {...props}
      />
    </form>
  );
};

export default Search;
