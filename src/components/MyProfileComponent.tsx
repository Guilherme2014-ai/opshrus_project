/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React, { useState, Dispatch } from "react";

// Contexts
import getSessionUserProvider from "../modules/getSessionUserProvider";

// Defaults
import colors from "../defaults/colors";
import { getUserSessionState } from "../contexts/userSessionStateContext";

// Components
import { Avatar } from "@mui/material";
import { ButtonComponent } from "./minor/ButtonComponent";
import { ProjectsComponent } from "./minor/ProjectsComponent";

// CSS
import "./style/MyProfileComponent.scss";

// Others
type TSubPages = "myProjects" | "myClients";
const subPages = {
  myProjects: <ProjectsComponent done={null} />,
  myClients: <h1>My Clients</h1>,
};

const MyProfileComponent = () => {
  const [userStringfied, setUserStringfied] = getUserSessionState();
  const [subPage, setSubPage] = useState("myProjects") as unknown as [
    TSubPages,
    Dispatch<TSubPages>,
  ];

  const userSession = getSessionUserProvider(userStringfied);

  function subPageChager(page: TSubPages) {
    setSubPage(page);
  }

  return (
    <div>
      <div className="userArea">
        <div className="userArea__profilePictureArea">
          <Avatar
            className="userArea__profilePictureArea__profilePicuture"
            alt="profile_picture"
            src={userSession.profile_picture}
          />
        </div>
        <div className="userArea__textContent">
          <h1>My Profile</h1>
          <ButtonComponent
            title="Edit Profile"
            textColor="white"
            backgroundColor={colors.selectedIconSideBar}
          />
        </div>
      </div>

      <ul className="userArea__ProjectUl">
        <li
          onClick={() => subPageChager("myProjects")}
          style={{
            color: subPage == "myProjects" ? "white" : "",
          }}
        >
          My Projects
        </li>
        <li
          onClick={() => subPageChager("myClients")}
          style={{
            color: subPage == "myClients" ? "white" : "",
          }}
        >
          My Clients
        </li>
      </ul>

      {subPages[subPage]}
    </div>
  );
};

export { MyProfileComponent };
