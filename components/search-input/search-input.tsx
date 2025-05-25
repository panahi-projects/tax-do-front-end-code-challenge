import styles from "./search-input.module.scss";
import { IoSearchOutline } from "react-icons/io5";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput = ({
  value,
  onChange,
  placeholder = "Search by Nationality",
}: SearchInputProps) => {
  return (
    <div className={styles["search-input-wrapper"]}>
      <IoSearchOutline
        className={styles["search-input-wrapper__icon"]}
        size={24}
      />
      <input
        type="search"
        className={styles["search-input-wrapper__search-input"]}
        placeholder={placeholder}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
