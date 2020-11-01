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
    <Description
      key={0}
      instructions={caseObject.instructions}
      caseTitle={caseObject.caseTitle}
      caseNum={caseObject.caseNum}
    />,

    <SentenceCondition key={1} statutes={caseObject.statutes} />,
    <CasePsychology key={2} petition={caseObject.petition} />,
    <Sentencing
      key={3}
      plusImpacts={caseObject.plusImpacts}
      minusImpacts={caseObject.minusImpacts}
    />,
    <ResultReport key={4} result={caseObject.result} epilogue={caseObject.epilogue} />,
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
        {components[selectedIndex]}
        <PrevArrowIcon
          onClick={() => onChangeIndex(selectedIndex - 1)}
          className={`${styles.prevArrow} ${selectedIndex === 0 ? styles.inActive : ""}`}
        ></PrevArrowIcon>
        <NextArrowIcon
          onClick={() => onChangeIndex(selectedIndex + 1)}
          className={`${styles.nextArrow} ${
            selectedIndex === components.length - 1 ? styles.inActive : ""
          }`}
        ></NextArrowIcon>
      </div>
    </div>
  );
}

export default Judgement;
