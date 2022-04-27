/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React, { useEffect, useState } from "react";

// modules
import getSessionUserProvider from "../modules/getSessionUserProvider";

// Defaults
import { defaultsTransition } from "../defaults/pre-styles";
import profilePicture from "../defaults/profilePicture";
import colors from "../defaults/colors";

// Contexts
import { getUserSessionState } from "../contexts/userSessionStateContext";
import { getWhiteThemeState } from "../contexts/whiteThemeContext";

// Components
import { Avatar } from "@mui/material";

// CSS
import "./style/SecondNavComponent.scss";

// Others
const preTransitionConfig = {
  transition: defaultsTransition.themeChange,
};
const SecondNavComponent = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [userStringfied, setUserStringfied] = getUserSessionState();
  const [whiteTheme, setWhiteTheme] = getWhiteThemeState() as [
    boolean,
    React.Dispatch<boolean>,
  ];

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
        ...preTransitionConfig,
        backgroundColor: isNavActive
          ? whiteTheme
            ? colors.primaryColorWhiteTheme
            : colors.primaryColor
          : "",
      }}
    >
      {userSession && (
        <>
          <h2
            style={{
              ...preTransitionConfig,
              color: whiteTheme ? colors.selectedIconSideBar : "white",
            }}
          >
            CONTENTA
          </h2>
          <div>
            <small
              style={{
                ...preTransitionConfig,
                color: whiteTheme ? colors.selectedIconSideBar : "white",
              }}
            >
              {userSession.name.toLocaleUpperCase()}
            </small>{" "}
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
