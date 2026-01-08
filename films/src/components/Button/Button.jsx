import styles from "./Button.module.css";

export const Button = ({ children, disabled = false }) => {

  const handleClick = () => {}

  return (
    <button onClick={handleClick} className={`${styles.button}`} disabled={disabled}>
      {children}
    </button>
  );
};
