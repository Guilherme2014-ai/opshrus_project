// Dependencies
import React, { Dispatch, useState } from "react";
import { getWhiteThemeState } from "../contexts/whiteThemeContext";

// Defaults
import colors from "../defaults/colors";

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
  const [whiteTheme, setWhiteTheme] = getWhiteThemeState() as [
    boolean,
    Dispatch<boolean>,
  ];

  const lettersPreset = {
    color: whiteTheme ? colors.selectedIconSideBar : "white",
  };

  function subPageChager(page: TSubPages) {
    setSubPage(page);
  }

  return (
    <div className="mainDashboard__ContentArea__ProjectsDashboard">
      <h1 className="dashboard__h1" style={{ ...lettersPreset }}>
        <strong>Dashboard</strong>
      </h1>
      <ul>
        <li
          onClick={() => subPageChager("ongoingProjects")}
          style={{
            color:
              subPage == "ongoingProjects"
                ? whiteTheme
                  ? colors.selectedIconSideBar
                  : "#FFFFFF"
                : colors.thirdColor,
          }}
        >
          Ongoing Projects
        </li>
        <li
          onClick={() => subPageChager("completeProjects")}
          style={{
            color:
              subPage == "completeProjects"
                ? whiteTheme
                  ? colors.selectedIconSideBar
                  : "#FFFFFF"
                : colors.thirdColor,
          }}
        >
          Complete Projects
        </li>
        <li
          onClick={() => subPageChager("messages")}
          style={{
            color:
              subPage == "messages"
                ? whiteTheme
                  ? colors.selectedIconSideBar
                  : "#FFFFFF"
                : colors.thirdColor,
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
