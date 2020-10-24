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
function ResultRepot({ result, epilogue }: Props): React.ReactElement {
  const otherServitude = "3년";
  const myServitude = "2년";
  return (
    <div>
      <div>
        <div className={styles.title}>당신의 판결과 실제 판결</div>
        <div>당신의 판결</div>
        <div>징역 {myServitude}</div>
        <div>다른 사람들의 판결</div>
        <div>징역 {otherServitude}</div>
        <div>실제 판결</div>
        <div>징역 {result[0].servitude}</div>
      </div>
      <div>
        <h1>사건 후기</h1>
        {epilogue}
      </div>
    </div>
  );
}

export default ResultRepot;
