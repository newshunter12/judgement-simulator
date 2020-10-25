import styles from "./SentenceCondition.module.scss";
import React from "react";

interface Props {
  statutes: {
    article: string;
    config_requirement: string;
    sentencing: string;
  }[];
}

//TODO: apply text-highlight to `sentencing`
function SentenceCondition({ statutes }: Props): React.ReactElement {
  return (
    <div>
      <h1 className={styles.caseTitle}>어떤 조항을 어겼을까요?</h1>
      <ul className={styles.instructionList}>
        {statutes.map((statute, i) => (
          <li className={styles.instruction} key={i}>
            <div className={styles.article}>{statute.article}</div>
            <div className={styles.requirement}>
              👤 {statute.config_requirement}
              <br></br>
              ⚖️ {statute.sentencing}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SentenceCondition;
