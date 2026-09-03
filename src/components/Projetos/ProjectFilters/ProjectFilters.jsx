import styles from "./ProjectFilters.module.css";
import { BiCategory } from "react-icons/bi";

export default function ProjectFilters({
  options,
  value,
  onChange,
}) {
  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterIconWrap} title="Filtrar projetos">
        <BiCategory className={styles.filterIcon} />
      </div>
      
      {options.map((opt) => {
        const isActive = value === opt; 

        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`${styles.filterButton} ${isActive ? styles.active : ""}`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
