import styles from "./CasePsychology.module.scss";
import React from "react";

interface Props {
  petition: {
    defendant: string;
    victim: string;
  };
}

function CasePsychology({ petition }: Props): React.ReactElement {
  const defendant = petition.defendant;
  const victim = petition.victim;

  return (
    <div className={styles.root}>
      <h1 className={styles.caseTitle}>탄원서를 읽어보세요</h1>
      <div className={styles.title}>피해자측</div>
      <div className={styles.content}>{defendant} </div>
      <div className={styles.title}>가해자측</div>
      <div className={styles.content}>{victim}</div>
    </div>
  );
}

export default CasePsychology;
