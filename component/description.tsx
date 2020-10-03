import styles from "./Description.module.scss";
import PrevIcon from "public/imgs/arrow-left.svg";
import NextIcon from "public/imgs/arrow-right.svg";
import React, { useState } from "react";

interface Props {
  instructions: {
    content: string;
  }[];
  caseTitle: string;
}

export default function Description({ instructions, caseTitle }: Props): React.ReactElement {
  const [index, setIndex] = useState(0);

  const title = caseTitle;
  const content = instructions[index].content;
  const img = `IMAGE_${index}`; //TODO: 이미지명 caseNum_n 으로 저장

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
        <div> {img}</div>
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
