import Link from "next/link";
import React from "react";
import styles from "../../styles/layout/header.module.css";
import logo from "public/header/logo.png";
import Image from "next/image";
import { RxCaretRight } from "react-icons/rx";
import Button1 from "../buttons/Button1";

function Header(props) {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inHeader}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logo} alt={`zazzle_${logo}`}></Image>
            </Link>
          </div>
          <nav className={styles.nav}>
            <ul>
              <li className={styles.nav_list}>
                <Link href="/introduce/Introduce" as="/introduce">
                  회사소개
                </Link>
                {<RxCaretRight className={styles.na} />}
                <ul>
                  <li></li>
                </ul>
              </li>
              <li className={styles.nav_list}>
                <Link href="/introduce/Introduce" as="/introduce">
                  필름사업부
                </Link>
                {<RxCaretRight className={styles.na} />}
                <ul>
                  <li>
                    <Link href=""></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.nav_list}>
                <Link href="/introduce/Introduce" as="/introduce">
                  에코사업부
                </Link>
                {<RxCaretRight className={styles.na} />}
                <ul>
                  <li>
                    <Link href=""></Link>
                  </li>
                </ul>
              </li>
              <li className={styles.nav_list}>
                <Link href="/introduce/Introduce" as="/introduce">
                  CONTACT
                </Link>
                {<RxCaretRight className={styles.na} />}
                <ul>
                  <li>
                    <Link href=""></Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className={styles.btns}>
              <Button1
                text="문의하기"
                src="/introduce/Introduce"
                as="/introduce"
                color="#010101"
              ></Button1>
              <Button1 text="언어변경" backgroundColor="#f96c0d"></Button1>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
