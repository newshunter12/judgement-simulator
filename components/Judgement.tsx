import Description from "./Description";
import SentenceCondition from "./SentenceCondition";
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
    </div>
  );
}

export default Judgement;
