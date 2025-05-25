"use client";

import { useTheme } from "@/providers/ThemeProvider";
import styles from "./theme-toggle.module.scss";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles["theme-toggle-button"]}>
      Switch to {theme === "dark" ? "light" : "dark"} mode
    </button>
  );
};

export default ThemeToggle;
