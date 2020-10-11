import CasePsychology from "./CasePsychology";
import Description from "./Description";
import ResultReport from "./ResultReport";
import SentenceCondition from "./SentenceCondition";
import Sentencing from "./Setencing";
import Case from "utils/Case.interface";
import React from "react";

interface Props {
  caseName: string;
  caseObject: Case | undefined;
}

//TODO: 유저가 어디 메뉴에 있는지에 대한 정보를 useState로 두기
function Judgement({ caseObject, caseName }: Props): React.ReactElement {
  if (caseObject === undefined) return <div>Loading...</div>;
  return (
    <div>
      <div>
        <h1>{caseName}</h1>

        <Description
          instructions={caseObject.instructions}
          caseTitle={caseObject.caseTitle}
          caseNum={caseObject.caseNum}
        />
      </div>
      <hr />
      <div>
        <SentenceCondition statutes={caseObject.statutes} />
      </div>
      <hr />
      <div>
        <CasePsychology petition={caseObject.petition} />
      </div>
      <hr />
      <div>
        <Sentencing plusImpacts={caseObject.plusImpacts} minusImpacts={caseObject.minusImpacts} />
      </div>
      <hr />
      <div>
        <ResultReport result={caseObject.result} epilogue={caseObject.epilogue} />
      </div>
    </div>
  );
}

export default Judgement;
