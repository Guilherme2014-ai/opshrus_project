/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React, { Dispatch, useEffect, useState } from "react";
import { idUniqueV2 } from "id-unique-protocol";

// Defaults
import month_position from "../../defaults/month_position";
import iconsPath from "../../defaults/iconsPath";
import colors from "../../defaults/colors";

// Contexts
import { getWhiteThemeState } from "../../contexts/whiteThemeContext";

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
  const jumpUnity = 100;
  const [whiteTheme, setWhiteTheme] = getWhiteThemeState() as [
    boolean,
    Dispatch<boolean>,
  ];

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
    console.log("Apertou", button);

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
              top: "-7px",
              right: "0",
              left: "-20px",
              width: "40px",
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
            {calendarData.months.map(({ name }) => {
              const monthNameLowerCase = name.toLocaleLowerCase() as TMonths;
              const monthNameUpperCase = name.toLocaleUpperCase();

              return (
                <div
                  className="monthsWrapper__months__month"
                  key={idUniqueV2()}
                  onClick={() => daysChangerHandler(monthNameLowerCase)}
                  style={{
                    width: "100%",
                  }}
                >
                  <h1
                    className="monthsWrapper__months__monthTitle"
                    style={{
                      color:
                        currentMonth == monthNameLowerCase
                          ? whiteTheme
                            ? "white"
                            : colors.selectedIconSideBar
                          : "#A64253",
                    }}
                  >
                    {monthNameUpperCase}
                  </h1>
                </div>
              );
            })}
          </div>
          <div
            style={{
              position: "absolute",
              color: "red",
              top: "-7px",
              right: "0",
              left: "190px",
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
                  boxShadow: whiteTheme
                    ? ""
                    : "rgb(124, 122, 122) 0px 6px 22px",
                  background:
                    createScheduleDay === day
                      ? colors.selectedIconSideBar
                      : "linear-gradient(100deg, rgba(206, 206, 206, 0.5), rgba(206, 206, 206, 0.1))",
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
