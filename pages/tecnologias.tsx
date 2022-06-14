import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCsharp,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiAdonisjs,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { BsServer } from "react-icons/bs";

import Header from "../Components/Header";
import Title from "../Components/SectionTitle";
import styles from "../styles/Tecnologies-Page.module.css";
import { FaCss3, FaHtml5, FaReact, FaSass } from "react-icons/fa";

const TecnologiesPage = () => {
  return (
    <>
      <Header />
      <section className={styles.tecnologies_page}>
        <Title>Tecnologias</Title>
        <p>
          Já trabalhei com diversas tecnologias do mundo de desenvolvimento web
          , sendo elas tanto de front-ent quanto de back-end!
        </p>
        <footer>
          <div>
            <h4>
              <FaReact /> Front-End
            </h4>
            <ul>
              <li>
                <FaReact />
                React
              </li>
              <li>
                <SiNextdotjs /> Next JS
              </li>
              <li>
                <FaHtml5 /> Html
              </li>
              <li>
                <FaCss3 /> <FaSass /> CSS/SASS
              </li>
            </ul>
          </div>

          <div>
            <h4>
              <BsServer />
              Back-End-End
            </h4>
            <ul>
              <li>
                <SiNodedotjs />
                Node
              </li>
              <li>
                <SiExpress />
                Express JS
              </li>
              <li>
                <SiAdonisjs />
                Adonis JS
              </li>
              <li>
                <SiNestjs />
                Nest JS
              </li>
              <li>
                <SiPostgresql /> <SiMongodb /> SQL/NOSQL
              </li>
            </ul>
          </div>
          <div>
            <h4>Linguagens</h4>
            <ul>
              <li>
                <SiJavascript /> Javascript
              </li>
              <li>
                <SiTypescript />
                Typescript
              </li>
              <li>
                <SiPython />
                Python
              </li>
              <li>
                <SiCsharp />
                C#
              </li>
            </ul>
          </div>
        </footer>
      </section>
    </>
  );
};

export default TecnologiesPage;
