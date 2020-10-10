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
    <div>
      <h1>탄원서를 읽어보세요</h1>

      <div>{defendant} </div>
      <div>{victim}</div>
    </div>
  );
}

export default CasePsychology;
