import styles from "./Description.module.scss";
import PrevIcon from "public/imgs/arrow-left.svg";
import NextIcon from "public/imgs/arrow-right.svg";
import React, { useState } from "react";

interface Props {
  instructions: {
    content: string;
  }[];
  caseTitle: string;
  caseNum: string;
}

export default function Description({
  instructions,
  caseTitle,
  caseNum,
}: Props): React.ReactElement {
  const [index, setIndex] = useState(0);

  const title = caseTitle;
  const content = instructions[index].content;

  return (
    <div>
      <div>
        <PrevIcon
          className={index === 0 ? styles.inActive : ""}
          onClick={() => setIndex(index - 1)}
        />
      </div>
      <div className={styles.title}> {title}</div>
      <div>
        <div className={styles.content}>{content}</div>
        <div>
          <img src={`/imgs/${caseNum}_${index}.svg`}></img>
        </div>
      </div>
      <div>
        <NextIcon
          className={index === 2 ? styles.inActive : ""}
          onClick={() => setIndex(index + 1)}
        />
      </div>
    </div>
  );
}
