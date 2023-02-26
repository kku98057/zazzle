import Image from "next/image";
import React from "react";
import styles from "../styles/components/card.module.css";

function Card({ children, src }) {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <Image src={src} alt={src}></Image>
      </div>
      <div className={styles.card_text}>{children}</div>
    </div>
  );
}

export default Card;
