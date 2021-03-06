import styles from "./Description.module.scss";
import React from "react";

interface Props {
  instructions: {
    content: string;
    title: string;
  }[];
  caseTitle: string;
  caseNum: string;
}

export default function Description({
  instructions,
  caseTitle,
  caseNum,
}: Props): React.ReactElement {
  const title = caseTitle;

  return (
    <div>
      <div className={styles.caseTitle}> {title}</div>
      <div>
        <ul className={styles.instructionList}>
          {instructions.map((instruction, i) => (
            <li key={i} className={styles.instruction}>
              <div className={styles.leftBox}>
                <div className={styles.title}>{instruction.title}</div>
                <div className={styles.content}>{instruction.content}</div>
              </div>
              <div className={styles.rightBox}>
                <img src={`/imgs/${caseNum}_${i + 1}.svg`}></img>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
