import { ReactNode } from "react";
import styles from "../../styles/Title/style.module.css";

type props = {
  children: ReactNode;
};

const Title = ({ children }: props) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
