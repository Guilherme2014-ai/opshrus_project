/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React, { Dispatch, useEffect, useState } from "react";
import { idUniqueV2 } from "id-unique-protocol";

// Defaults
import month_position from "../../defaults/month_position";
import iconsPath from "../../defaults/iconsPath";
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
  const [specialMonthActive, setSpecialMonthActive] = useState(
    null,
  ) as unknown as ["first" | "last", Dispatch<"first" | "last">];
  const [createScheduleDay, setCreateScheduleDay] = useState(
    null,
  ) as unknown as [null | number, Dispatch<null | number>];
  const jumpUnity = 100;

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
      const jump = deltaY < 0 ? jumpUnity : -jumpUnity;

      monthsWrapper__monthsElement.scrollBy(jump, 0);
    }
  });

  //---------Functions----------------------------------------------------------

  function daysChangerHandler(monthName: TMonths) {
    setCurrentMonth(monthName);
  }

  function jumpWithTheButton(button: "left" | "right") {
    const monthsWrapper__monthsElement = document.getElementById(
      "monthsWrapper__months",
    ) as HTMLElement;

    const jump = button == "left" ? -jumpUnity : jumpUnity;

    monthsWrapper__monthsElement.scrollBy(jump, 0);
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
          <div
            style={{
              position: "absolute",
              color: "red",
              transform: "translateX(-50px) translateY(-5px)",
            }}
            className="monthsWrapper__buttonWrapper"
            onClick={() => jumpWithTheButton("left")}
          >
            <svg
              key={idUniqueV2()}
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="36"
              fill="white"
              viewBox="0 0 16 16"
            >
              <path d={iconsPath.arrowLeft} />
            </svg>
          </div>
          <div className="monthsWrapper__months" id="monthsWrapper__months">
            {calendarData.months.map(({ name }, index) => {
              const lastMonth = index === calendarData.months.length - 1;
              const firstMonth = index === 0;

              const monthNameLowerCase = name.toLocaleLowerCase() as TMonths;
              const monthNameUpperCase = name.toLocaleUpperCase();

              return (
                <div
                  className="monthsWrapper__months__month"
                  key={idUniqueV2()}
                  onClick={() => daysChangerHandler(monthNameLowerCase)}
                  style={{
                    width: "50%",
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
                    {monthNameUpperCase}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            color: "red",
            right: "90px",
            transform: "translateX(5px) translateY(-5px)",
          }}
          className="monthsWrapper__buttonWrapper"
          onClick={() => jumpWithTheButton("right")}
        >
          <svg
            key={idUniqueV2()}
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="36"
            fill="white"
            viewBox="0 0 16 16"
          >
            <path d={iconsPath.arrowRight} />
          </svg>
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
                      : "linear-gradient(120deg, #b6c5ca, #759eaa)",
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
