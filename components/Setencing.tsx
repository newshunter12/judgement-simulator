import React from "react";

interface Props {
  plusImpacts: string[];
  minusImpacts: string[];
}

function WeightCondition({ plusImpacts, minusImpacts }: Props): React.ReactElement {
  return (
    <div>
      <h1>판사님, 형을 선택해주세요</h1>
      <ul>
        {plusImpacts.map((impact, i) => (
          <li key={i}>{impact}</li>
        ))}
      </ul>

      <ul>
        {minusImpacts.map((impact, i) => (
          <li key={i}>{impact}</li>
        ))}
      </ul>
    </div>
  );
}

export default WeightCondition;
