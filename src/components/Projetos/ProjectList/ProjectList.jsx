import { useRef } from "react";
// Componente que faz conteúdos longos deslizarem (efeito letreiro/carrossel)
import HoverMarquee from "../../ui/HoverMarquee/HoverMarquee"; 
import styles from "./ProjectList.module.css";
import projectPlaceholder from "../../../assets/placeholders/retangulo_horizontal.svg";

export default function ProjectList({ projects }) {

  // Referências para utilização do HoverMarquee
  const itemRefs = useRef({}); // Guarda a referência do elemento que sofre o Hover (Gatilho)
  const categoryRefs = useRef({}); // Guarda a referência da div interna que vai deslizar (Alvo)

  return (
    <div className={styles.projectListContainer}>
      <div className={styles.list}>
        {projects.map((p) => {
          // Inicializa as referências do item atual se elas ainda não existirem
          if (!itemRefs.current[p.id]) itemRefs.current[p.id] = { current: null };
          if (!categoryRefs.current[p.id]) categoryRefs.current[p.id] = { current: null };

          return (
            <div key={p.id} ref={itemRefs.current[p.id]} className={styles.listItem}>
              <div className={styles.projectImage}>
                <img
                  className={styles.principalImage}
                  src={p.imageSrc || projectPlaceholder}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className={styles.projectInfo}>
                <div className={styles.categoryContainer}>
                  
                  <HoverMarquee
                    triggerRef={itemRefs.current[p.id]}     
                    targetRef={categoryRefs.current[p.id]}   
                    duration="4s"                            
                  >
                    {p.category.map((cat, index) => (
                      <span key={index} className={styles.categorySpan}>
                        {cat}
                      </span>
                    ))}
                  </HoverMarquee>

                </div>

                <h2>{p.title}</h2>
                <p>{p.description}</p>
                <button>Saiba mais ⟶</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
