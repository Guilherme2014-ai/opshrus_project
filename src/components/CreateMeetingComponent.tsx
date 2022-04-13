// Dependencies
import React from "react";

// Defaults
import months from "./defaults/months";

// Interfaces
import { ICalendarData, IMonth } from "../interfaces/ICalendarData";

// Components
import { CalendarComponent } from "./minor/CalendarComponent";
import { Circle } from "./minor/Circle";

// CSS
import "./style/CreateMeetingComponent.scss";

const CreateMeetingComponent = () => {
  return (
    <section className="CreateMeetingMain">
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
        left="80%"
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
        <h1 className="CreateMeetingMain__MeetingArea_boxTitle">
          <strong>BOOK A MEETING</strong>
        </h1>
        <div className="CreateMeetingMain__MeetingArea_box">
          <div className="CreateMeetingMain__MeetingArea_box__SUB CreateMeetingMain__MeetingArea_box__inputs">
            <label htmlFor="complete_name">Full Name</label>
            <br />
            <input
              type="text"
              name="complete_name"
              className="CreateMeetingMain__MeetingArea_box__inputs__input"
              id="complete_name"
              placeholder="Complete Name"
            />
            <br />
            <label htmlFor="company">Company Name</label>
            <br />
            <input
              type="text"
              name="company"
              className="CreateMeetingMain__MeetingArea_box__inputs__input"
              id="company"
              placeholder="Company"
            />
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              className="CreateMeetingMain__MeetingArea_box__inputs__input"
              id="email"
              placeholder="Email"
            />
            <br />
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
          <div className="CreateMeetingMain__MeetingArea_box__SUB CreateMeetingMain__MeetingArea_box__calendar">
            <CalendarComponent
              calendarData={{
                months: months as IMonth[],
              }}
            />
            <br />
            <br />
            <div className="CreateMeetingMain__MeetingArea_box__calendar__buttons">
              <span>CANCEL</span>
              <span>CONFIRM</span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <h1 className="CreateMeetingMain__rodape">
        <strong>CONTENTA</strong>
      </h1>
    </section>
  );
};

export { CreateMeetingComponent };
