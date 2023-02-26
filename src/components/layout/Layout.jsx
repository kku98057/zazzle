import React from "react";
import styles from "../../styles/layout/layout.module.css";
import { Noto_Sans } from "next/font/google";
import Header from "../common/Header";
import Footer from "../common/Footer";

export default function Layout({ children }) {
  return (
    <div className="wrap">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
}
