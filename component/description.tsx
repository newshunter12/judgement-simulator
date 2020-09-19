import styles from "./Description.module.scss";
import React from "react";

export default function Description(): React.ReactElement {
  const data = {
    caseTitle: "국내 최대 온라인 성착취 사이트 운영자, 꼬리가 잡히다",
    content:
      "해외에 서버를 두고 17년간 운영된 국내 최대 ‘온라인 성착취 사이트' S의  운영자 A 가 구속됐다. 1999년 문을 연 사이트 S는 수사기관의 추적을 피해 가입자 100만 명을 거느린 ‘온라인 성착취의 온상'이다. 이곳의 핵심 운영자는 호주에 거주하는 두 쌍의 한국인 부부. 이번에 구속된 A는 이들 중 한 명으로, 사이트 기획 및 개발 단계부터 참여해 메뉴관리, 광고 수익금 입금 계좌 관리 등 업무를 담당했다.",
  };

  return (
    <div>
      <div className={styles.title}>{data.caseTitle}</div>
      <div className={styles.container}>
        <div className={styles.content}>{data.content}</div>
        <div className={styles.image}></div>
      </div>
      <div className="pageNum"></div>
    </div>
  );
}
