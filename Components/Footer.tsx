import React from "react";
import styles from "../styles/footer.module.css";
import NavSocials from "./NavSocials";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}></div>
      <div className={styles.socials}>
        <span>Inivando um Projeto de Cada Vez!</span>
        <NavSocials />
      </div>
    </footer>
  );
};

export default Footer;
