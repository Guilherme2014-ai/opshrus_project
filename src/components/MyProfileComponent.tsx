// Dependencies
import React from "react";

// Contexts
import getSessionUserProvider from "../modules/getSessionUserProvider";

// Defaults
import colors from "../defaults/colors";
import { getUserSessionState } from "../contexts/userSessionStateContext";

// Components
import { Avatar } from "@mui/material";
import { ButtonComponent } from "./minor/ButtonComponent";

// CSS
import "./style/MyProfileComponent.scss";

const MyProfileComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userStringfied, setUserStringfied] = getUserSessionState();
  const userSession = getSessionUserProvider(userStringfied);

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
    </div>
  );
};

export { MyProfileComponent };
