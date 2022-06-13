import Image from "next/image";
import style from "../styles/Photo.module.css";

const Photo = () => {
  return (
    <aside className={style.photo_aside}>
      <Image
        src="/assets/218480281_1339201426495100_5152472262235085304_n.jpg"
        alt="Imagem de Ewerton Ribeiro"
        width={800}
        height={800}
        style={{ borderRadius: "3333px" }}
      ></Image>
      <div className={style.image_socials}>
        <a
          href="https://discord.com/channels/@me"
          target="_blank"
          rel="noreferrer"
          className={style.image_social}
        >
          <img
            src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white"
            alt="Discord Logo"
          />
        </a>
        <a
          href="ewertondosanjosz@gmail.com"
          target="_blank"
          rel="noreferrer"
          className={style.image_social}
        >
          <img
            src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white"
            alt="Gmail Logo"
          />
        </a>
        <a
          href="www.linkedin.com/in/ewerton-ribeiro-822460205"
          target="_blank"
          rel="noreferrer"
          className={style.image_social}
        >
          <img
            src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"
            alt="Linkedin Logo"
          />
        </a>
      </div>
    </aside>
  );
};

export default Photo;
