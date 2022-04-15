// Dependencies
import React from "react";
import { ProjectsComponent } from "./minor/ProjectsComponent";

// Components
import { TopicsScrollComponent } from "./minor/TopicsScrollComponent";

// CSS
import "./style/BrowserPage.scss";

const BrowserPage = () => {
  return (
    <section className="mainSearch">
      <h1 className="mainSearch__discoverTitle">Discover</h1>
      <TopicsScrollComponent />
      <h1 className="mainSearch__projectBrowserTitle">Project Browser</h1>
      <ProjectsComponent done={null} />
      <br />
    </section>
  );
};

export { BrowserPage };

/*
OCS: ProjectsComponent estão somente configurados para projetos do user logado
*/
