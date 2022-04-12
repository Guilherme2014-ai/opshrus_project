// Dependencies
import React, { useEffect } from "react";
import { idUniqueV2 } from "id-unique-protocol";

// Defaults
import iconsPath from "../../defaults/iconsPath";

// Interfaces
import ICalendarData from "../../interfaces/ICalendarData";

// CSS
import "./style/CalendarComponent.scss";

const CalendarComponent = ({
  calendarData,
}: {
  calendarData: ICalendarData;
}) => {
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

  return (
    <div className="calendar">
      <div className="monthsWrapper">
        <div className="monthsWrapper__months" id="monthsWrapper__months">
          {calendarData.months.map((month) => (
            <div className="monthsWrapper__months__month">
              <h1 className="monthsWrapper__months__monthTitle">
                {month.name}
              </h1>
            </div>
          ))}
        </div>
        <svg
          key={idUniqueV2()}
          className="monthsWrapper__leftArrow"
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="36"
          fill="black"
          viewBox="0 0 16 16"
          onClick={() => jumpWithTheButton("left")}
        >
          <path d={iconsPath.arrowLeft} />
        </svg>
        <svg
          key={idUniqueV2()}
          className="monthsWrapper__rightArrow"
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="36"
          fill="black"
          viewBox="0 0 16 16"
          onClick={() => jumpWithTheButton("right")}
        >
          <path d={iconsPath.arrowRight} />
        </svg>
      </div>

      <div className="days"></div>
    </div>
  );
};

export { CalendarComponent };
