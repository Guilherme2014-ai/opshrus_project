/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React, { useEffect, useState } from "react";

// modules
import getSessionUserProvider from "../modules/getSessionUserProvider";

// Defaults
import profilePicture from "../defaults/profilePicture";
import colors from "../defaults/colors";

// Contexts
import { getUserSessionState } from "../contexts/userSessionStateContext";

// Components
import { Avatar } from "@mui/material";

// CSS
import "./style/SecondNavComponent.scss";

const SecondNavComponent = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [userStringfied, setUserStringfied] = getUserSessionState();
  const userSession = getSessionUserProvider(userStringfied);

  useEffect(() => {
    window.addEventListener("scroll", scrollYHandler);

    function scrollYHandler() {
      const scrollY = window.scrollY;

      scrollY === 0 ? setIsNavActive(false) : setIsNavActive(true);
    }
  });

  return (
    <nav
      className="mainNav"
      style={{
        backgroundColor: isNavActive ? colors.primaryColor : "",
      }}
    >
      {userSession && (
        <>
          <h2>Contenta</h2>
          <div>
            <small>{userSession.name.toLocaleUpperCase()}</small>{" "}
            <Avatar
              alt="Remy Sharp"
              src={userSession.profile_picture || profilePicture}
            />
          </div>
        </>
      )}
    </nav>
  );
};

export { SecondNavComponent };
