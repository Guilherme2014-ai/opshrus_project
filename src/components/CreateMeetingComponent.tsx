// Dependencies
import React from "react";

// Defaults
import months from "./defaults/months";

// Components
import { CalendarComponent } from "./minor/CalendarComponent";

// CSS
import "./style/CreateMeetingComponent.scss";

const CreateMeetingComponent = () => {
  return (
    <section className="CreateMeetingMain">
      <CalendarComponent
        calendarData={{
          months: months,
        }}
      />
    </section>
  );
};

export { CreateMeetingComponent };
