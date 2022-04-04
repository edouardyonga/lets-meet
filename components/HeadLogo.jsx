import React from "react";
import styles from "../styles/Auth.module.css";
import Link from "next/link";
const HeadLogo = () => {
  return (
    <div>
      <h1 className={styles.logoName}>
        <Link href="/">{"Let'sMeet."}</Link>
      </h1>
    </div>
  );
};

export default HeadLogo;
