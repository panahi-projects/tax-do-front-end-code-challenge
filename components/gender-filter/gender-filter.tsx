// components/gender-filter/gender-filter.tsx
import styles from "./gender-filter.module.scss";

type GenderFilterValue = "male" | "female" | "any";

interface GenderFilterProps {
  value: GenderFilterValue;
  onChange: (value: GenderFilterValue) => void;
}

const GenderFilter = ({ value, onChange }: GenderFilterProps) => {
  return (
    <div className={styles["gender-filter"]}>
      <span className={styles["gender-filter__label"]}>Filter by:</span>
      <select
        className={styles["gender-filter__select"]}
        value={value}
        onChange={(e) => onChange(e.target.value as GenderFilterValue)}
      >
        <option value="any">Any gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

export default GenderFilter;
