import Menubar from "component/menubar";
import Head from "next/head";
import styles from "pages/index.module.scss";
import React from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Judgement Simulator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>판결문 시뮬레이터 </div>
      <div className={styles.main}>
        <Menubar />
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          ITPAS
        </a>
      </footer>
    </div>
  );
}
