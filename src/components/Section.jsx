import React from "react";
import styles from "../styles/layout/section.module.css";

function Section({ children }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.section_wrap}>{children}</div>
      </div>
    </section>
  );
}

export default Section;
