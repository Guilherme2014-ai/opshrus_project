/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React, { useState } from "react";

// Interfaces
import IMainPage from "../interfaces/IMainPage";

// Contexts
import { getWhiteThemeState } from "../contexts/whiteThemeContext";

// Components
import { DashboardComponent } from "./DashboardComponent";
import { MyProfileComponent } from "./MyProfileComponent";
import { LeftSideBarComponent } from "./LeftSideBarComponent";
import { SecondNavComponent } from "./SecondNavComponent";
import { BrowserPage } from "./BrowserPage";

// Defaults
import iconsPath from "../defaults/iconsPath";

// CSS
import "./style/MainPageComponent.scss";
import colors from "../defaults/colors";

// Others
const pages = {
  home: <DashboardComponent />,
  search: <h1>Search</h1>,
  featured: <h1>Featured</h1>,
  profile: <MyProfileComponent />,
  projects: <h1>Projects</h1>,
  clients: <h1>Clients</h1>,
  browse: <BrowserPage />,
};

const MainPageComponent = ({ namePage }: IMainPage) => {
  const [whiteTheme, setWhiteTheme] = getWhiteThemeState() as [
    boolean,
    React.Dispatch<boolean>,
  ];

  return (
    <section
      className="mainPage"
      style={{
        transition: "all ease 0.5s",
        backgroundColor: whiteTheme
          ? colors.primaryColorWhiteTheme
          : colors.primaryColor,
      }}
    >
      <SecondNavComponent />

      <div className="mainPage__ContentArea">
        {" "}
        <LeftSideBarComponent
          pageSelected={namePage}
          divisors={[
            {
              title: "MENU",
              sideBarsIcons: [
                {
                  title: "Home",
                  svgLink: iconsPath.home,
                },
                {
                  title: "Search",
                  svgLink: iconsPath.search,
                },
                {
                  title: "Browse",
                  svgLink: iconsPath.browse,
                },
                {
                  title: "Featured",
                  svgLink: iconsPath.start,
                },
                {
                  title: "Featured",
                  svgLink: iconsPath.start,
                },
              ],
            },
            {
              title: "CREATOR MENU",
              sideBarsIcons: [
                {
                  title: "Profile",
                  svgLink: iconsPath.user,
                },
                {
                  title: "Projects",
                  svgLink: iconsPath.boxes,
                },
                {
                  title: "Clients",
                  svgLink: iconsPath.users,
                },
                {
                  title: "Featured",
                  svgLink: iconsPath.start,
                },
              ],
            },
          ]}
        />
        {pages[namePage]}
      </div>
    </section>
  );
};

export { MainPageComponent };
