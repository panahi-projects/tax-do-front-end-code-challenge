"use client";

import { useTheme } from "@/providers/ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "dark" ? "light" : "dark"} mode
    </button>
  );
};

export default ThemeToggle;
