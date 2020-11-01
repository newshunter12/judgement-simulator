import styles from "./Sentencing.module.scss";
import FormCheckIcon from "public/imgs/formCheck.svg";
import MinusButtonIcon from "public/imgs/minus-button.svg";
import MinusCheckIcon from "public/imgs/minusCheck.svg";
import PlusButtonIcon from "public/imgs/plus-button.svg";
import PlusCheckIcon from "public/imgs/plusCheck.svg";
import React, { useState } from "react";

interface Props {
  plusImpacts: string[];
  minusImpacts: string[];
}

function WeightCondition({ plusImpacts, minusImpacts }: Props): React.ReactElement {
  const [prison, setPrison] = useState(0);
  const [penalty, setPenalty] = useState(0);
  const [defer, setDefer] = useState(0);

  const genders = ["여성", "남성", "기타"];
  const ages = ["20대 미만", "20대", "30대", "40대", "50대", "60대 이상"];

  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);

  const [plusImpactItems, setPlusImpactItems] = useState(
    plusImpacts.map((impact) => ({
      impact,
      isChecked: false,
    })),
  );

  const [minusImpactItems, setMinusImpactItems] = useState(
    minusImpacts.map((impact) => ({
      impact,
      isChecked: false,
    })),
  );

  return (
    <div className={styles.root}>
      <div className={styles.title}>판사님, 형을 선택해주세요</div>
      <div className={styles.boxContainer}>
        <div className={styles.leftBox}>
          <div> 선고를 내리고 다음 단계로 이동하세요.</div>
          <div className={styles.sentencingBoxRows}>
            <div className={styles.sentencingButtonBox}>
              징역
              <PlusButtonIcon onClick={() => setPrison(prison + 1)} />
              <div className={styles.value}>{prison}년</div>
              <MinusButtonIcon onClick={() => setPrison(prison - 1)} />
            </div>
          </div>
          <div className={styles.sentencingBoxRows}>
            <div className={styles.sentencingButtonBox}>
              벌금
              <PlusButtonIcon onClick={() => setPenalty(penalty + 1)} />
              <div className={styles.value}>{penalty}원</div>
              <MinusButtonIcon onClick={() => setPenalty(penalty - 1)} />
            </div>
          </div>
          <div className={styles.sentencingBoxRows}>
            <div className={styles.sentencingButtonBox}>
              집행유예
              <PlusButtonIcon onClick={() => setDefer(defer + 1)} />
              <div className={styles.value}>{defer}년</div>
              <MinusButtonIcon onClick={() => setDefer(defer - 1)} />
            </div>
          </div>
        </div>

        <div className={styles.rightBox}>
          <div className={styles.tip}>최대 n개까지 선택할 수 있습니다.</div>
          <ul>
            {plusImpactItems.map((item, i) => (
              <li key={i} className={styles.impacts}>
                <div>
                  <span
                    className={styles.plusCheckBox}
                    onClick={() => {
                      const items = [...plusImpactItems];
                      items[i].isChecked = !items[i].isChecked;
                      setPlusImpactItems(items);
                    }}
                  >
                    <PlusCheckIcon
                      className={`${item.isChecked ? styles.checked : styles.uncheck}`}
                    ></PlusCheckIcon>
                  </span>
                  <span className={styles.impact}>가중사유 | {item.impact}</span>
                </div>
              </li>
            ))}
          </ul>
          <hr></hr>
          <ul>
            {minusImpactItems.map((item, i) => (
              <li key={i} className={styles.impacts}>
                <div>
                  <span
                    className={styles.minusCheckBox}
                    onClick={() => {
                      const items = [...minusImpactItems];
                      items[i].isChecked = !items[i].isChecked;
                      setMinusImpactItems(items);
                    }}
                  >
                    <MinusCheckIcon
                      className={`${item.isChecked ? styles.checked : styles.uncheck}`}
                    ></MinusCheckIcon>
                  </span>
                  <span className={styles.impact}>감경사유 | {item.impact}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.formBox}>
            <div className={styles.tip}>설문에 응해주세요.</div>
            <div className={styles.desc}>
              결과를 보기 전에 더 정확한 데이터를 위해 설문에 응해주세요
            </div>
            <ul className={styles.radioButtonGroup}>
              {genders.map((gender, i) => (
                <li key={i} className={styles.list}>
                  <span className={styles.radioButton} onClick={() => setSelectedGender(i)}>
                    <FormCheckIcon
                      className={`${styles.uncheck} ${i === selectedGender ? styles.checked : ""}`}
                    ></FormCheckIcon>
                  </span>
                  {gender}
                </li>
              ))}
            </ul>
            <hr />
            <ul className={styles.radioButtonGroup}>
              {ages.map((age, i) => (
                <li key={i} className={styles.list}>
                  <span className={styles.radioButton} onClick={() => setSelectedAge(i)}>
                    <FormCheckIcon
                      className={`${styles.uncheck} ${i === selectedAge ? styles.checked : ""}`}
                    ></FormCheckIcon>
                  </span>
                  {age}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeightCondition;
