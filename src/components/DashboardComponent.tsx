// Dependencies
import React, { Dispatch, useState } from "react";

// Components
import { ProjectsComponent } from "./minor/ProjectsComponent";

// CSS
import "./style/DashboardComponent.scss";

// Others
type TSubPages = "ongoingProjects" | "completeProjects" | "messages";
const subPages = {
  ongoingProjects: <ProjectsComponent done={false} />, // Poderia ter feito uma função com o parametro como boolean
  completeProjects: <ProjectsComponent done={true} />,
  messages: <h1>Messages</h1>,
};

const DashboardComponent = () => {
  const [subPage, setSubPage] = useState("ongoingProjects") as unknown as [
    TSubPages,
    Dispatch<TSubPages>,
  ];

  function subPageChager(page: TSubPages) {
    setSubPage(page);
  }

  return (
    <div className="mainDashboard__ContentArea__ProjectsDashboard">
      <h1 className="dashboard__h1">Dashboard</h1>
      <ul>
        <li
          onClick={() => subPageChager("ongoingProjects")}
          style={{
            color: subPage == "ongoingProjects" ? "white" : "",
          }}
        >
          Ongoing Projects
        </li>
        <li
          onClick={() => subPageChager("completeProjects")}
          style={{
            color: subPage == "completeProjects" ? "white" : "",
          }}
        >
          Complete Projects
        </li>
        <li
          onClick={() => subPageChager("messages")}
          style={{
            color: subPage == "messages" ? "white" : "",
          }}
        >
          Messages
        </li>
      </ul>
      {subPages[subPage]}
    </div>
  );
};

export { DashboardComponent };
