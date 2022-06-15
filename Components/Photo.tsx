import Image from "next/image";
import style from "../styles/Photo.module.css";
import Button from "./Social_Button";

type Socials = {
  name: string;
  color: string;
  link: string;
};

const Photo = () => {
  const TypesSocials = [
    {
      name: "Linkedin",
      color: "#0077b5",
      link: "https://www.linkedin.com/in/ewerton-ribeiro-822460205",
    },
    {
      name: "Discord",
      color: "#7289da",
      link: "https://discord.com/channels/@me",
    },
    {
      name: "Github",
      color: " #333",
      link: "https://github.com/ewertonribeiro",
    },
  ] as Socials[];

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
        {TypesSocials.map(({ name, color, link }, index) => (
          <Button key={index} text={name} color={color} link={link} />
        ))}
      </div>
    </aside>
  );
};

export default Photo;
