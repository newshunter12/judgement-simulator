import CasePsychology from "./CasePsychology";
import Description from "./Description";
import styles from "./Judgement.module.scss";
import ResultReport from "./ResultReport";
import SentenceCondition from "./SentenceCondition";
import Sentencing from "./Setencing";
import NextArrowIcon from "public/imgs/arrow-right.svg";
import Case from "utils/Case.interface";
import React, { useState, useRef } from "react";

interface Props {
  caseName: string;
  caseObject: Case | undefined;
}

function Judgement({ caseObject, caseName }: Props): React.ReactElement {
  if (caseObject === undefined) return <div>Loading...</div>;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuList = useRef<HTMLUListElement>(null);

  const taps = ["사건 개요", "양형 조건", "사건 심리", "가중/감경", "당신의 판결"];

  const comps = [
    <div key={0}>
      <h1>{caseName}</h1>
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
    const nowProcess = menuList.current.children[i] as HTMLElement;
    nowProcess.style.color = "red";
  }

  return (
    <div>
      <ul ref={menuList}>
        {taps.map((tab, i) => (
          <li key={i} className={styles.menu}>
            {tab}
          </li>
        ))}
      </ul>
      {comps[selectedIndex]}
      <div>
        <NextArrowIcon
          onClick={() => onChangeIndex(selectedIndex + 1)}
          className={selectedIndex === comps.length - 1 ? styles.inActive : ""}
        ></NextArrowIcon>
      </div>
    </div>
  );
}

export default Judgement;
