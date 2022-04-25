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
      <h1 className="mainSearch__discoverTitle">
        <strong>Discover</strong>
      </h1>
      <TopicsScrollComponent />

      <br />
      <br />

      <h1 className="mainSearch__projectBrowserTitle">Project Browser</h1>
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
