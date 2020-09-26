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
      <h1>{caseName}</h1>
      <div>{caseObject.caseName} </div>
    </div>
  );
}

export default Judgement;
