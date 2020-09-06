import React from "react";

const Calendar = ({ yyyymmdd }) => {
  let yyyy = yyyymmdd.substr(0, 4);
  let mm = yyyymmdd.substr(4, 2);
  let dd = yyyymmdd.substr(6, 2);
  let dates = new Date(yyyy, mm, 0).getDate();
  let nHeadDays = new Date(yyyy, mm - 1, 1).getDay();
  let nTailDays = 6 - new Date(yyyy, mm, 0).getDay();
  let month = dates + nHeadDays + nTailDays;

  const dates_arr = new Array(month);
  dates_arr.fill(0);
  for (let i = 0; i < dates; i++) {
    dates_arr[nHeadDays + i] = i + 1;
  }

  const weeks = new Array(month / 7);
  let idx = 0;
  for (let i = 0; i < weeks.length; i++) {
    weeks[i] = dates_arr.slice(idx, 7 + idx);
    idx = idx + 7;
  }

  return (
    <div>
      <p>
        {yyyy} / {mm}.{dd} <br />
        {dates} / {nHeadDays} / {nTailDays} / {month}
      </p>
      {weeks[0].length} / {weeks[1].length} / {weeks[3][3]}
      <table>
        <thead>
          <tr>
            {"sun,mon,tue,wed,thu,fri,sat".split(",").map((day) => (
              <th>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, wi) => (
            <tr key={wi}>
              {week.map((d, di) => (
                <td key={di}>{d}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
