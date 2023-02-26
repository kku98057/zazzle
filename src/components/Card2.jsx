import Image from "next/image";
import React from "react";
import styles from "@/styles/components/card.module.css";

function Card2({ src, children, reverse }) {
  return (
    <div className={styles.card2}>
      <div className={styles.card2_img} style={{ order: reverse && "1" }}>
        {/* <Image src={src} alt={src}></Image> */}
      </div>
      <div className={styles.card2_textwrap}>
        <div className={styles.card2_text}>{children}</div>
      </div>
    </div>
  );
}

export default Card2;
