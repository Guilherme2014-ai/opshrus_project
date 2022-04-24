/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React, { Dispatch, useEffect, useState } from "react";
import { idUniqueV2 } from "id-unique-protocol";

// Defaults
import month_position from "../../defaults/month_position";
import colors from "../../defaults/colors";

// Components
import { ScheduleCreatorComponent } from "./ScheduleCreatorComponent";

// Interfaces
import { ICalendarData } from "../../interfaces/ICalendarData";
import TMonths from "../../interfaces/TMonths";

// CSS
import "./style/CalendarComponent.scss";

const CalendarComponent = ({
  calendarData,
}: {
  calendarData: ICalendarData;
}) => {
  // Hooks
  const [currentMonth, setCurrentMonth] = useState("january") as unknown as [
    TMonths,
    Dispatch<TMonths>,
  ];
  const [createScheduleDay, setCreateScheduleDay] = useState(
    null,
  ) as unknown as [null | number, Dispatch<null | number>];

  useEffect(() => {
    const monthsWrapper__monthsElement = document.getElementById(
      "monthsWrapper__months",
    ) as HTMLElement;

    monthsWrapper__monthsElement.addEventListener("wheel", jumpWithTheWheel);

    monthsWrapper__monthsElement.addEventListener("mouseenter", () => {
      document.body.style.overflowY = "hidden";
    });
    monthsWrapper__monthsElement.addEventListener("mouseleave", () => {
      document.body.style.overflowY = "auto";
    });

    function jumpWithTheWheel(e: WheelEvent) {
      const deltaY = e.deltaY;
      const jump = deltaY < 0 ? 100 : -100;

      monthsWrapper__monthsElement.scrollBy(jump, 0);
    }
  });

  //---------Functions----------------------------------------------------------

  function daysChangerHandler(monthName: TMonths) {
    setCurrentMonth(monthName);
  }

  const simulatedFor = (num: number): number[] => {
    const baseArr = [];

    for (let index = 0; index <= num; index++) baseArr.push(index);

    return baseArr;
  };

  //-----------------------------------------------------------------------------

  return (
    <div className="calendar">
      <div className="monthsArea">
        <div className="monthsWrapper">
          <div className="monthsWrapper__months" id="monthsWrapper__months">
            {calendarData.months.map(({ name }, index) => {
              const lastMonth = index === calendarData.months.length - 1;
              const firstMonth = index === 0;

              const monthNameLowerCase = name.toLowerCase() as TMonths;

              return (
                <div
                  className="monthsWrapper__months__month"
                  key={idUniqueV2()}
                  onClick={() => daysChangerHandler(monthNameLowerCase)}
                  style={{
                    width: lastMonth || firstMonth ? "100%" : "50%",
                  }}
                >
                  <h1
                    className="monthsWrapper__months__monthTitle"
                    style={{
                      color:
                        currentMonth == monthNameLowerCase
                          ? "white"
                          : "#A64253",
                    }}
                  >
                    {monthNameLowerCase}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="calendar__days">
        {simulatedFor(
          calendarData.months[Number(month_position[currentMonth])]
            .daysQuantity,
        ).map((day) => {
          const isScheduleActive = createScheduleDay === day;
          const date = {
            month: currentMonth,
            day,
          };

          return (
            <div key={idUniqueV2()}>
              <div
                className="calendar__days__day"
                style={{
                  background:
                    createScheduleDay === day
                      ? colors.selectedIconSideBar
                      : "linear-gradient(120deg, #E5E5E5, #84b0be)",
                }}
                onClick={() => {
                  isScheduleActive
                    ? setCreateScheduleDay(null)
                    : setCreateScheduleDay(day);
                }}
              >
                {day}
              </div>
              {createScheduleDay === day && (
                <ScheduleCreatorComponent date={date} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { CalendarComponent };
