// Dependencies
import React from "react";
import { idUniqueV2 } from "id-unique-protocol";

// Interfaces
import IDate from "../../interfaces/IDate";

// CSS
import "./style/ScheduleCreator.scss";

export function ScheduleCreatorComponent({ date }: { date: IDate }) {
  const mockedAvaliableHours = [
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ];

  return (
    <div className="scheduleCreatorContainer">
      <div className="scheduleCreatorContainer__intermediate">
        {mockedAvaliableHours.map((hour) => {
          return <h2 key={idUniqueV2()}>{hour}</h2>;
        })}
      </div>
    </div>
  );
}
