// Dependencies
import React from "react";

// modules
import getSessionUserProvider from "../modules/getSessionUserProvider";

// Contexts
import { getUserSessionState } from "../contexts/userSessionStateContext";

// Components
import { Avatar } from "@mui/material";

// CSS
import "./style/SecondNavComponent.scss";
const SecondNavComponent = () => {
  const [userStringfied, setUserStringfied] = getUserSessionState();
  const userSession = getSessionUserProvider(userStringfied);

  return (
    <nav className="mainNav">
      {userSession && (
        <>
          <h2>Contenta</h2>
          <div>
            <small>{userSession.name.toLocaleUpperCase()}</small>{" "}
            <Avatar alt="Remy Sharp" src={userSession.profile_picture} />
          </div>
        </>
      )}
    </nav>
  );
};

export { SecondNavComponent };
