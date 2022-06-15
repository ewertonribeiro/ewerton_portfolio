import styles from "../styles/Projetcs-Section.module.css";
import Project from "../Components/Project";
import Header from "../Components/Header";
import utils from "../styles/utils.module.css";

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <section className={`${styles.projects_container} ${utils.container}`}>
        <h2>Projetos</h2>
        <main>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </main>
      </section>
    </>
  );
};

export default ProjectsPage;
