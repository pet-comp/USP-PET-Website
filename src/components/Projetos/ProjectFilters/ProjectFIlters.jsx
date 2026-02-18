import styles from "./ProjectFilters.module.css";
import { CiGrid41 } from "react-icons/ci";

export default function ProjectFilters({
  options,
  value,
  onChange,
  view,
  onToggleView,
}) {
  return (
    <div className={styles.filtersContainer}>
      <button
        type="button"
        className={styles.gridBtn}
        onClick={onToggleView}
        aria-label={view === "grid" ? "Mudar para lista" : "Mudar para grade"}
        title={view === "grid" ? "Grade" : "Lista"}
      >
        <CiGrid41 />
      </button>
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          style={{
            fontWeight: value === opt ? "700" : "600",
            opacity: value === opt ? 1 : 0.8,
            backgroundColor: value === opt ? "#127E3F" : "#fff",
            color: value === opt ? "#fff" : "#127E3F",
            border: value === opt ? "none" : "1px solid #127E3F",
          }}
          className={styles.filterButton}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}
