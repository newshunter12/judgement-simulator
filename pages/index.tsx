import styles from "./index.module.scss";
import Link from "next/link";
import React from "react";

export default function Home(): React.ReactElement {
  return (
    <>
      <div className={styles.container}>
        <head>
          <title>Judgement Simulator</title>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <div className={styles.header}>판결문 시뮬레이터 </div>
        <div className={styles.main}>
          <Link href={`/data/온라인 성착취 사이트 운영자`}>
            <a className={styles.link}>온라인 성착취 사이트 운영자</a>
          </Link>
          <Link href={`/data/위력에 의한 성폭력`}>
            <a className={styles.link}>위력에 의한 성폭력</a>
          </Link>
          <Link href={`/data/온라인 성착취 사이트 운영자`}>
            <a className={styles.link}>온라인 성착취 사이트 운영자</a>
          </Link>
          <Link href={`/data/위력에 의한 성폭력`}>
            <a className={styles.link}>위력에 의한 성폭력</a>
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
    </>
  );
}
