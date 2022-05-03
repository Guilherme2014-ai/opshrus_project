/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React, { Dispatch } from "react";

// Defaults
import months from "./defaults/months";
import colors from "../defaults/colors";

// Interfaces
import { IMonth } from "../interfaces/ICalendarData";

// Context
import { getWhiteThemeState } from "../contexts/whiteThemeContext";

// Components
import { CalendarComponent } from "./minor/CalendarComponent";
import { Circle } from "./minor/Circle";

// CSS
import "./style/CreateMeetingComponent.scss";

// Tiles escroláveis com botões de click/left do mouse
// Refatorar estrutura da página, de forma que os inputs sigam o mesmo tamanho que os meses

const CreateMeetingComponent = () => {
  const [whiteTheme, setWhiteTheme] = getWhiteThemeState() as [
    boolean,
    Dispatch<boolean>,
  ];

  const lettersPreset = {
    color: whiteTheme ? "white" : colors.selectedIconSideBar,
  };

  return (
    <section
      className="CreateMeetingMain"
      style={{
        background: whiteTheme ? "#30343F" : "#FFFFFF",
      }}
    >
      <Circle
        gradientBackground="linear-gradient(210.31deg, #FF6108 -11.63%, #FFE608 105.87%)"
        diameter="92.99px"
        top="13%"
        right="0"
        bottom="0"
        left="2%"
      />
      <Circle
        gradientBackground="linear-gradient(210.31deg, purple -11.63%, pink 105.87%)"
        diameter="150px"
        top="50%"
        right="0"
        bottom="0"
        left="10%"
      />
      <Circle
        gradientBackground="linear-gradient(210.31deg, purple -11.63%, pink 105.87%)"
        diameter="150px"
        top="70%"
        right="0"
        bottom="0"
        left="60%"
      />
      <Circle
        gradientBackground="linear-gradient(210.31deg, #FF6108 -11.63%, #FFE608 105.87%)"
        diameter="92.99px"
        top="28%"
        right="0"
        bottom="0"
        left="75%"
      />
      <Circle
        gradientBackground="linear-gradient(210.31deg, #FF6108 -11.63%, #FFE608 105.87%)"
        diameter="12px"
        top="10%"
        right="0"
        bottom="0"
        left="80%"
      />
      <Circle
        gradientBackground="linear-gradient(210.31deg, #FF6108 -11.63%, #FFE608 105.87%)"
        diameter="22px"
        top="80%"
        right="0"
        bottom="0"
        left="20%"
      />
      <div className="CreateMeetingMain__MeetingArea">
        <h1
          className="CreateMeetingMain__MeetingArea_boxTitle"
          style={{ ...lettersPreset }}
        >
          <strong>BOOK A VIRTUAL MEETING</strong>
        </h1>
        <div
          className="CreateMeetingMain__MeetingArea_box"
          style={{
            background: whiteTheme
              ? "linear-gradient(130deg, rgba(206, 206, 206, 0.5), rgba(206, 206, 206, 0.1))"
              : "linear-gradient(130deg, rgba(206, 206, 206, 0.5), rgba(206, 206, 206, 0.1))",
            boxShadow: whiteTheme ? "" : "rgb(144, 144, 144) 4px 4px 25px",
          }}
        >
          <div
            className="CreateMeetingMain__MeetingArea_box__SUB CreateMeetingMain__MeetingArea_box__inputs"
            style={{ ...lettersPreset }}
          >
            <div>
              <label htmlFor="complete_name">Full Name</label>
              <input
                type="text"
                name="complete_name"
                className="CreateMeetingMain__MeetingArea_box__inputs__input"
                id="complete_name"
                placeholder="Complete Name"
              />
            </div>
            <br />
            <div>
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                name="company"
                className="CreateMeetingMain__MeetingArea_box__inputs__input"
                id="company"
                placeholder="Company"
              />
            </div>
            <br />
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name="email"
                className="CreateMeetingMain__MeetingArea_box__inputs__input"
                id="email"
                placeholder="Email"
              />
            </div>
            <br />
            <div>
              <label htmlFor="work">Work</label>
              <br />
              <input
                type="text"
                name="work"
                className="CreateMeetingMain__MeetingArea_box__inputs__input"
                id="work"
                placeholder="Work"
              />
            </div>
          </div>
          <div className="CreateMeetingMain__MeetingArea_box__SUB CreateMeetingMain__MeetingArea_box__calendar">
            <CalendarComponent
              calendarData={{
                months: months as IMonth[],
              }}
            />
            <br />
            <br />
            <div
              className="CreateMeetingMain__MeetingArea_box__calendar__buttons"
              style={{ ...lettersPreset }}
            >
              <span>CANCEL</span>
              <span>CONFIRM</span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h1 className="CreateMeetingMain__rodape" style={{ ...lettersPreset }}>
        <strong>CONTENTA</strong>
      </h1>
    </section>
  );
};

export { CreateMeetingComponent };
