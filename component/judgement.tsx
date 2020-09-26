import React from "react";

interface Props {
  caseName: string;
  json: string;
}

//TODO: 유저가 어디 메뉴에 있는지에 대한 정보를 useState로 두기
function Judgement({ json, caseName }: Props): React.ReactElement {
  const caseContents = json;
  return (
    <div>
      <h1>{caseName}</h1>
      {caseContents}
    </div>
  );
}

export default Judgement;
