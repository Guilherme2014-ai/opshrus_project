/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React, { Dispatch } from "react";
import { ProjectsComponent } from "./minor/ProjectsComponent";

// Contexts
import { getWhiteThemeState } from "../contexts/whiteThemeContext";

// Components
import { TopicsScrollComponent } from "./minor/TopicsScrollComponent";

// CSS
import "./style/BrowserPage.scss";

import { defaultsTransition } from "../defaults/pre-styles";
import colors from "../defaults/colors";

const BrowserPage = () => {
  const [whiteTheme, setWhiteTheme] = getWhiteThemeState() as [
    boolean,
    Dispatch<boolean>,
  ];

  const titlesPreConfigThemeChanger = {
    transition: defaultsTransition.themeChange,
    color: whiteTheme ? colors.selectedIconSideBar : "white",
  };

  return (
    <section className="mainSearch">
      <h1
        className="mainSearch__discoverTitle"
        style={{ ...titlesPreConfigThemeChanger }}
      >
        <strong>Discover</strong>
      </h1>
      <TopicsScrollComponent />

      <br />
      <br />

      <h1
        className="mainSearch__projectBrowserTitle"
        style={{ ...titlesPreConfigThemeChanger }}
      >
        Project Browser
      </h1>
      <div className="mainSearch__projectsArea">
        <ProjectsComponent done={null} background={false} />
      </div>
      <br />
    </section>
  );
};

export { BrowserPage };

/*
OCS: ProjectsComponent estão somente configurados para projetos do user logado
*/
