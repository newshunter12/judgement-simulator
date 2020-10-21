import styles from "./index.module.scss";
import Link from "next/link";
import React from "react";

export default function Home(): React.ReactElement {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.projectTitle}>판결 시뮬레이터</div>
        </div>

        <div className={styles.main}>
          <div className={styles.caseBox}>
            <Link href={`/data/온라인 성착취 사이트 운영자`}>
              <a>
                <div>
                  <img src={`/imgs/2018고단4404_0.svg`} />
                </div>
                <div className={styles.caseNameBox}>
                  <div className={styles.caseName}>온라인 성착취 사이트 운영자</div>
                </div>
              </a>
            </Link>
          </div>

          <div className={styles.caseBox}>
            <Link href={`/data/위력에 의한 성폭력`}>
              <a>
                <div>
                  <img src={`/imgs/2018고단4404_0.svg`} />
                </div>
                <div className={styles.caseNameBox}>
                  <div className={styles.caseName}>위력에 의한 성폭력</div>
                </div>
              </a>
            </Link>
          </div>
          <div className={styles.caseBox}>
            <Link href={`/data/8세 여아를 목졸아 강간한 50대 남성`}>
              <a>
                <div>
                  <img src={`/imgs/2018고단4404_0.svg`} />
                </div>
                <div className={styles.caseNameBox}>
                  <div className={styles.caseName}>8세 여아를 목졸아 강간한 50대 남성</div>
                </div>
              </a>
            </Link>
          </div>
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
