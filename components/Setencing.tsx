import styles from "./Sentencing.module.scss";
import React from "react";

interface Props {
  plusImpacts: string[];
  minusImpacts: string[];
}

function WeightCondition({ plusImpacts, minusImpacts }: Props): React.ReactElement {
  return (
    <div className={styles.root}>
      <div className={styles.title}>판사님, 형을 선택해주세요</div>
      <div className={styles.boxContainer}>
        <div className={styles.leftBox}></div>
        <div className={styles.rightBox}>
          <ul>
            {plusImpacts.map((impact, i) => (
              <li key={i}>{impact}</li>
            ))}
          </ul>

          <ul>
            {minusImpacts.map((impact, i) => (
              <li key={i}>{impact}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeightCondition;
