import styles from "./Paragraph.module.css";

export const Paragraph = ({ children }) => {
  return <p className={`${styles.paragraph}`}>{children}</p>;
};
