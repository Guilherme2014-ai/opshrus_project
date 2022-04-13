// Dependencies
import React, { useEffect, useState } from "react";
import { idUniqueV2 } from "id-unique-protocol";

// Defaults
import iconsPath from "../../defaults/iconsPath";

// Interfaces
import ICalendarData from "../../interfaces/ICalendarData";

// CSS
import "./style/CalendarComponent.scss";
import month_position from "../../defaults/month_position";

const CalendarComponent = ({
  calendarData,
}: {
  calendarData: ICalendarData;
}) => {
  const [currentMonth, setCurrentMonth] = useState("january");

  useEffect(() => {
    const monthsWrapper__monthsElement = document.getElementById(
      "monthsWrapper__months",
    ) as HTMLElement;

    monthsWrapper__monthsElement.addEventListener("wheel", jumpWithTheWheel);

    function jumpWithTheWheel(e: WheelEvent) {
      const deltaY = e.deltaY;

      const jump = deltaY < 0 ? 100 : -100;

      monthsWrapper__monthsElement.scrollBy(jump, 0);
    }
  });

  function jumpWithTheButton(side: "left" | "right") {
    const monthsWrapper__monthsElement = document.getElementById(
      "monthsWrapper__months",
    ) as HTMLElement;

    const jump = side == "right" ? 100 : -100;

    monthsWrapper__monthsElement.scrollBy(jump, 0);
  }

  const simulatedFor = (num: number): number[] => {
    const baseArr = [];

    for (let index = 0; index <= num; index++) baseArr.push(index);

    return baseArr;
  };

  const monthPosition =
    month_position[`${currentMonth}` as "january"] || "january";
  console.log(monthPosition, currentMonth);

  return (
    <div className="calendar">
      <div className="monthsArea">
        <div className="monthsWrapper">
          <div className="monthsWrapper__months" id="monthsWrapper__months">
            {calendarData.months.map((month) => (
              <div className="monthsWrapper__months__month" key={idUniqueV2()}>
                <h1 className="monthsWrapper__months__monthTitle">
                  {month.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="calendar__days">
        {simulatedFor(calendarData.months[0].daysQuantity).map((day) => (
          <div className="calendar__days__day" key={idUniqueV2()}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export { CalendarComponent };
//linear-gradient(210.31deg, #FF6108 -11.63%, #FFE608 105.87%)
//calendarData.months[1].daysQuantity
