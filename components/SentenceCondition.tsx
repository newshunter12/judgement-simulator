import styles from "./SentenceCondition.module.scss";
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
      <div className={styles.caseContainer}>
        <h1 className={styles.caseTitle}>죄목에 적용된 법령</h1>
        <ul className={styles.instructionList}>
          {statutes.map((statute, i) => (
            <li className={styles.instruction} key={i}>
              <div className={styles.title}>{statute.article}</div>
              <div className={styles.content}>
                {statute.config_requirements}
                <br></br>
                {statute.sentencing}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SentenceCondition;
