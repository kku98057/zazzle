import "@/styles/globals.css";
import Layout from "../components/layout/Layout";

import { Noto_Sans } from "next/font/google";
import { Noto_Sans_KR } from "next/font/google";
const NOTO = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
import Head from "next/head";
const NOTOKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${NOTOKR.style.fontFamily}, ${NOTO.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
