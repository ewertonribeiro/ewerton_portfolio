import styles from "../styles/Project-Single.module.css";

const Project = () => {
  return (
    <div className={styles.project_card}>
      <div className={styles.img_wrapper}></div>
      <h3 className={styles.project_title}>Titulo</h3>
      <main>
        <p>
          Using React, Node.js, Express & MongoDB you'll learn how to build a
          Full Stack MERN Application - from start to finish. The App is called
          Memories and it is a simple social media app that allows users to post
          interesting events that happened in their lives.
        </p>
      </main>
      <footer className={styles.project_footer}>
        <a href="#" target="_blank">
          Code
        </a>
      </footer>
    </div>
  );
};

export default Project;
