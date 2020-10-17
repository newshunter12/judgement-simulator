import styles from "./ResultReport.module.scss";
import React from "react";

interface Props {
  result: {
    trial: string;
    servitude: string;
    content: string;
  }[];
  epilogue: string;
}
/* ResultReport 오타 수정! */
function ResultRepot({ result, epilogue }: Props): React.ReactElement {
  const otherServitude = "3년";
  const myServitude = "2년";
  return (
    <div className={styles.caseContainer}>
      <div>
        <h1 className={styles.caseTitle}>당신의 판결과 실제 판결</h1>
        <div className={styles.title}>당신의 판결</div>
        <span>징역</span>
        <span>{myServitude}</span>
        <div className={styles.title}>다른 사람들의 판결</div>
        <span>징역</span>
        <span>{otherServitude}</span>
        <div className={styles.title}>실제 판결</div>
        <span>징역</span>
        <span>{result[0].servitude}</span>
      </div>
      <div>
        <h1 className={styles.caseTitle}>사건 후기</h1>
        {epilogue}
      </div>
    </div>
  );
}

export default ResultRepot;
