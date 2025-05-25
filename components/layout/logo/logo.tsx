"use client";
import { useTheme } from "@/providers/ThemeProvider";
import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.scss";

const Logo = () => {
  const { theme } = useTheme();
  return (
    <Link href="/" className={styles.logo}>
      <Image
        src={
          theme === "dark"
            ? "/assets/images/logo-white.svg"
            : "/assets/images/logo-black.svg"
        }
        width={98}
        height={29}
        alt="TaxDo"
      />
      <h1 className="sr-only">TaxDo</h1>
    </Link>
  );
};

export default Logo;
