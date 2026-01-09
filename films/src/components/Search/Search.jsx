import React, { useState } from "react";
import "./Search.css";

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
    <form className="search" onSubmit={handleSubmit}>
      {iconSrc && <img src={iconSrc} alt="" className="search-icon" />}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="search-input"
        {...props}
      />
    </form>
  );
};

export default Search;
