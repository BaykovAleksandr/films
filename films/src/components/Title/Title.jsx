import styles from "./Title.module.css";
import cn from 'classnames';

const Title = ({ children, size = "h1" }) => {
  switch (size) {
    case "h1":
      return <h1 className={cn(styles.heading, styles.h1)}>{children}</h1>;
    case "h2":
      return <h2 className={cn(styles.heading, styles.h2)}>{children}</h2>;
    case "h3":
      return <h3 className={cn(styles.heading, styles.h3)}>{children}</h3>;
    default:
      return <h1 className={cn(styles.heading, styles.h1)}>{children}</h1>;
  }
};

export default Title
