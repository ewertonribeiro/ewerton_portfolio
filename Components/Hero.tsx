import Link from "next/link";
import styles from "../styles/Hero.module.css";
import BackgroundAnimation from "./BgAnimation";
import Photo from "./Photo";

const Hero = () => {
  return (
    <main>
      <BackgroundAnimation />
      <div className={styles.hero_container}>
        <main className="hero_main">
          <h1 className={styles.hero_title}>
            Prazer, Sou o <strong>Ewerton!</strong>
            <br />
            Vamos Codar?
          </h1>

          <p className={styles.hero_paragrafo}>
            Sou um Dev fullstack com destaque para Back-end , estudante De
            desenvolvimento web da
            <a href="https://www.betrybe.com/">
              <strong> Trybe</strong>
            </a>
            , sempre em busca do proximo nivel!
          </p>

          <Link href="/projetos">
            <a className={styles.hero_button}>Meus Projetos!</a>
          </Link>
        </main>
        <Photo />
      </div>
    </main>
  );
};

export default Hero;
