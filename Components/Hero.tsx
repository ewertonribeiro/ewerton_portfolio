import Link from "next/link";
import styles from "../styles/Hero.module.css"
import BackgroundAnimation from "./BgAnimation";

const Hero = () => {
  return (
    <main>
      <BackgroundAnimation />
      <div className={styles.hero_container}>
        <h1 className={styles.hero_title}>BEM VINDO!
          <br />
          AO MEU PORTFOLIO PESSOAL
        </h1>

        <p className={styles.hero_paragrafo} >Sou um Dev fullstack com destaque para Back-end , estudante De desenvolvimento web da
          <a href="https://www.betrybe.com/"><strong> Trybe</strong></a>
          , sempre em busca do proximo nivel!
        </p>

        <Link href="/sobre" >
          <a className={styles.hero_button}>Saiba Mais!</a>
        </Link>
      </div>
    </main>
  )
}

export default Hero;
