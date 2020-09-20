import styles from "./index.module.scss";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Home(): React.ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>Judgement Simulator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>판결문 시뮬레이터 </div>
      <div className={styles.main}>
        <Link href={`/data/casename`}>
          <a>판결하러 가기</a>
        </Link>
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
