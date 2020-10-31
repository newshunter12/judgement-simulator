import styles from "./Sentencing.module.scss";
import MinusCheckIcon from "public/imgs/minusCheck.svg";
import PlusCheckIcon from "public/imgs/plusCheck.svg";
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
        <div className={styles.leftBox}>선고를 내리고 다음 단계로 이동하세요.</div>
        <div className={styles.rightBox}>
          <div className={styles.sentencingTip}>최대 n개까지 선택할 수 있습니다.</div>
          <ul>
            {plusImpacts.map((impact, i) => (
              <li key={i} className={styles.impacts}>
                <div>
                  <span className={styles.plusCheckBox}>
                    <PlusCheckIcon></PlusCheckIcon>
                  </span>
                  <span className={styles.impact}>가중사유 | {impact}</span>
                </div>
              </li>
            ))}
          </ul>
          <hr></hr>
          <ul>
            {minusImpacts.map((impact, i) => (
              <li key={i} className={styles.impacts}>
                <div>
                  <span className={styles.minusCheckBox}>
                    <MinusCheckIcon></MinusCheckIcon>
                  </span>
                  <span className={styles.impact}>감경사유 | {impact}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeightCondition;
