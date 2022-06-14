import styles from "../styles/Projetcs-Section.module.css";
import Project from "../Components/Project";
import Header from "../Components/Header";

const ProjectsPage = () => {
  return (
    <>
      <Header />
      <section className={styles.projects_container}>
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
