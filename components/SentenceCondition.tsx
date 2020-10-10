import React from "react";

interface Props {
  statutes: {
    article: string;
    config_requirements: string;
    sentencing: string;
  }[];
}

function SentenceCondition({ statutes }: Props): React.ReactElement {
  return (
    <div>
      <div>
        <h1>죄목을 보고 선고하세요</h1>
        <ul>
          {statutes.map((statute, i) => (
            <li key={i}>
              <div>{statute.article}</div>
              <div>{statute.config_requirements}</div>
              <div> {statute.sentencing}</div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1> 선고를 내리고 다음 단계로 이동하세요.</h1>
        <div> 징역</div>
        <div> 벌금 </div>
        <div>집행유예</div>
      </div>
    </div>
  );
}

export default SentenceCondition;
