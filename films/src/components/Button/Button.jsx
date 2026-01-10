import styles from "./Button.module.css";

const Button = ({ children, disabled = false }) => {

  const handleClick = () => {}

  return (
    <button onClick={handleClick} className={styles.button} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button