import React from "react";
import styles from "../styles/components/title.module.css";
function Title({ children }) {
  return <div className={styles.title}>{children}</div>;
}

export default Title;
