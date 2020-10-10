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
        <h1>죄목에 적용된 법령</h1>
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
    </div>
  );
}

export default SentenceCondition;
