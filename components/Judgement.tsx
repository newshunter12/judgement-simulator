import CasePsychology from "./CasePsychology";
import Description from "./Description";
import styles from "./Judgement.module.scss";
import ResultReport from "./ResultReport";
import SentenceCondition from "./SentenceCondition";
import Sentencing from "./Setencing";
import PrevArrowIcon from "public/imgs/arrow-left.svg";
import NextArrowIcon from "public/imgs/arrow-right.svg";
import Case from "utils/Case.interface";
import React, { useState, useRef } from "react";

interface Props {
  caseObject: Case | undefined;
}

function Judgement({ caseObject }: Props): React.ReactElement {
  if (caseObject === undefined) return <div>Loading...</div>;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabList = useRef<HTMLUListElement>(null);

  const taps = ["사건 개요", "양형 조건", "사건 심리", "당신의 판결", "결과보기"];

  const components = [
    <div key={0}>
      <Description
        instructions={caseObject.instructions}
        caseTitle={caseObject.caseTitle}
        caseNum={caseObject.caseNum}
      />
    </div>,
    <div key={1}>
      <SentenceCondition statutes={caseObject.statutes} />
    </div>,
    <div key={2}>
      <CasePsychology petition={caseObject.petition} />
    </div>,
    <div key={3}>
      <Sentencing plusImpacts={caseObject.plusImpacts} minusImpacts={caseObject.minusImpacts} />
    </div>,
    <div key={4}>
      <ResultReport result={caseObject.result} epilogue={caseObject.epilogue} />
    </div>,
  ];

  function onChangeIndex(i: number) {
    setSelectedIndex(i);
  }

  return (
    <div className={styles.root}>
      <ul className={styles.tabList} ref={tabList}>
        {taps.map((tab, i) => (
          <li key={i} className={`${styles.tab} ${i === selectedIndex ? styles.clickedTab : ""}`}>
            {tab}
          </li>
        ))}
      </ul>
      <div className={styles.body}>
        <div>{components[selectedIndex]}</div>
        <div>
          <PrevArrowIcon
            onClick={() => onChangeIndex(selectedIndex - 1)}
            className={`${selectedIndex === 0 ? styles.inActive : ""}`}
          ></PrevArrowIcon>
          {/*</div>
        <div>*/}
          <NextArrowIcon
            onClick={() => onChangeIndex(selectedIndex + 1)}
            className={` ${selectedIndex === components.length - 1 ? styles.inActive : ""}`}
          ></NextArrowIcon>
        </div>
      </div>
    </div>
  );
}

export default Judgement;
