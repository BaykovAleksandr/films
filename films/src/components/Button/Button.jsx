import "./Button.css";

const Button = ({ children, disabled = false }) => {

  const handleClick = () => {}

  return (
    <button onClick={handleClick} className={"button"} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button