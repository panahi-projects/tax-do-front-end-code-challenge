"use client";
import { useState, useEffect } from "react";
import styles from "./back-to-top-button.module.scss";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className={styles.container}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={styles.button}
          aria-label="Back to top"
        >
          <span className={styles.arrow}>&uarr;</span>
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
