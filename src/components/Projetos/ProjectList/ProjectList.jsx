import styles from "./ProjectList.module.css";
export default function ProjectList({ projects }) {
  return (
    <div>
      <div className={styles.projectListContainer}>
        <div className={styles.list}>
          {projects.map((p) => (
            <div key={p.id} className={styles.listItem}>
              <div className={styles.projectImage}>
                <img
                  src="src/assets/Projetos/linhas_projeto.svg"
                  alt="Linhas decorativas"
                  className={styles.decorativeLines}
                />
                <div className={styles.photoWrap}>
                  <img
                    className={styles.principalImage}
                    src={p.imageSrc}
                    alt={p.title}
                  />
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h2>{p.title}</h2>
                <p>{p.description}</p>
                <button>Saiba mais</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
