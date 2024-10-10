import React from "react";
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Not Alone Developer Team</h1>
      <h2 className={styles.h2} >We create mobile apps for businesses and customers that work to improve your service quality</h2>
    </header>
  );
};
