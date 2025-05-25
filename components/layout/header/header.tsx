import Link from "next/link";
import styles from "./header.module.scss";
import ThemeToggle from "@/components/layout/theme-toggle/theme-toggle";
import Logo from "@/components/layout/logo/logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/favorites">Favorites</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
