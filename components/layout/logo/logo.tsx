import Link from "next/link";
import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      TaxDo.
    </Link>
  );
};

export default Logo;
