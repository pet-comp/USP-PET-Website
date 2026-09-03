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
                    className={styles.principalImage}
                    src={p.imageSrc}
                    alt={p.title}
                  />

              </div>

              <div className={styles.projectInfo}>
                <div className={styles.categoryContainer}>
                  {p.category.map((cat, index) => (
                    <span key={index} className={styles.categorySpan}>
                      {cat}
                    </span>
                  ))}
                </div>

                <h2>{p.title}</h2>
                <p>{p.description}</p>
                <button>Saiba mais ⟶</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
