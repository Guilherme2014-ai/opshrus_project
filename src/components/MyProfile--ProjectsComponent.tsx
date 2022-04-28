/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React, { useState, Dispatch } from "react";

// Contexts
import getSessionUserProvider from "../modules/getSessionUserProvider";
import { getWhiteThemeState } from "../contexts/whiteThemeContext";

// INterfaces
import IUserSession from "../interfaces/IUserSession";

// Defaults
import colors from "../defaults/colors";
import { getUserSessionState } from "../contexts/userSessionStateContext";
import profilePicture from "../defaults/profilePicture";

// Components
import { Avatar } from "@mui/material";
import { ButtonComponent } from "./minor/ButtonComponent";
import { ProjectsComponent } from "./minor/ProjectsComponent";

// CSS
import "./style/MyProfile__ProjectsComponent.scss";

// Others
type TProfileSubPages = "projects" | "editProfile";

type TSubPages = "myProjects" | "myClients";
const subPages = {
  myProjects: <ProjectsComponent done={null} />,
  myClients: <h1>My Clients</h1>,
};

const MyProfile__ProjectsComponent = ({
  subPageStateParam,
}: {
  subPageStateParam: [TProfileSubPages, Dispatch<TProfileSubPages>];
}) => {
  const [whiteTheme, setWhiteTheme] = getWhiteThemeState() as [
    boolean,
    Dispatch<boolean>,
  ];
  const [subPageState, setSubPageState] = subPageStateParam;
  const [userStringfied, setUserStringfied] = getUserSessionState();
  const [subPage, setSubPage] = useState("myProjects") as unknown as [
    TSubPages,
    Dispatch<TSubPages>,
  ];

  const userSession = getSessionUserProvider(userStringfied) as IUserSession;

  function subPageChager(page: TSubPages) {
    setSubPage(page);
  }

  return (
    <div>
      <div
        className="userArea"
        style={{
          color: whiteTheme ? colors.selectedIconSideBar : "white",
        }}
      >
        <div className="userArea__profilePictureArea">
          <Avatar
            className="userArea__profilePictureArea__profilePicuture"
            alt="profile_picture"
            src={userSession ? userSession.profile_picture : profilePicture}
          />
        </div>
        <div className="userArea__textContent">
          <h1>My Profile</h1>
          <ButtonComponent
            title="Edit Profile"
            textColor="white"
            backgroundColor={colors.selectedIconSideBar}
            onClick={() => setSubPageState("editProfile")}
          />
        </div>
      </div>

      <ul className="userArea__ProjectUl">
        <li
          onClick={() => subPageChager("myProjects")}
          style={{
            color: !whiteTheme
              ? subPage == "myProjects"
                ? "white"
                : colors.thirdColor
              : subPage == "myProjects"
              ? colors.selectedIconSideBar
              : colors.thirdColor,
          }}
        >
          MY PROJECTS
        </li>
        <li
          onClick={() => subPageChager("myClients")}
          style={{
            color: !whiteTheme
              ? subPage == "myClients"
                ? "white"
                : colors.thirdColor
              : subPage == "myClients"
              ? colors.selectedIconSideBar
              : colors.thirdColor,
          }}
        >
          MY CLIENTS
        </li>
      </ul>

      {subPages[subPage]}
    </div>
  );
};

export { MyProfile__ProjectsComponent };
