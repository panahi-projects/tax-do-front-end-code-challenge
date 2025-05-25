// components/gender-filter/gender-filter.tsx
import styles from "./gender-filter.module.scss";

type GenderFilterValue = "male" | "female" | "any";

interface GenderFilterProps {
  value: GenderFilterValue;
  onChange: (value: GenderFilterValue) => void;
  className?: string;
}

const GenderFilter = ({ value, onChange, className }: GenderFilterProps) => {
  return (
    <div className={`${styles["gender-filter"]} ${className}`}>
      <label className={styles["gender-filter__label"]}>
        Filter by:
        <select
          className={styles["gender-filter__select"]}
          value={value}
          onChange={(e) => onChange(e.target.value as GenderFilterValue)}
          aria-label="Filter by gender"
        >
          <option value="any">Any gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
    </div>
  );
};

export default GenderFilter;
