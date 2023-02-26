import Link from "next/link";
import React from "react";
import styles from "../../styles/buttons/button1.module.css";
function Button1({ text, onClick, src, backgroundColor, color, as }) {
  return (
    <button
      style={{
        background: backgroundColor ? backgroundColor : "",
        border: backgroundColor
          ? `1px solid ${backgroundColor}`
          : "1px solid #d4d2e3",
      }}
      className={styles.btn}
    >
      {src ? (
        <Link href={src} as={as}>
          <span style={{ color: `${color ? color : "#fff"}` }}>{text}</span>
        </Link>
      ) : (
        <span style={{ color: `${color ? color : "#fff"}` }}>{text}</span>
      )}
    </button>
  );
}

export default Button1;
