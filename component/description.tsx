import styles from "./Description.module.scss";
import React from "react";

export default function Description(caseTitle, content): React.ReactElement {
  return (
    <div>
      <div className={styles.title}>{caseTitle}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
}
