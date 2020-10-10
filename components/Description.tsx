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
        <ul>
          {instructions.map((instruction, i) => (
            <li key={i} className={styles.instruction}>
              <div className={styles.title}>소제목: {instruction.title}</div>
              <div className={styles.content}>{instruction.content}</div>
              <img src={`/imgs/${caseNum}_${i}.svg`}></img>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
