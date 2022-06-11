import styles from "../styles/Projetcs-Section.module.css"
import Project from "./Project"

const ProjectsSection = () => {
  return (
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
  )
}

export default ProjectsSection
