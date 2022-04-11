// Dependencies
import React from "react";
import { ProjectsComponent } from "./minor/ProjectsComponent";

// Components
import { TopicsScrollComponent } from "./minor/TopicsScrollComponent";

// CSS
import "./style/SearchComponent.scss";

const SearchComponent = () => {
  return (
    <div className="mainSearch">
      <h1 className="mainSearch__discoverTitle">Discover</h1>
      <TopicsScrollComponent />

      <h1 className="mainSearch__projectBrowserTitle">Project Browser</h1>
      <ProjectsComponent done={null} />
      <br />
    </div>
  );
};

export { SearchComponent };

/*
OCS: ProjectsComponent estão somente configurados para projetos do user logado
*/
