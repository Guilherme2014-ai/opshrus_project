/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React from "react";
import { idUniqueV2 } from "id-unique-protocol";

// Context
import { getUserSessionState } from "../../contexts/userSessionStateContext";

// Modules
import getSessionUserProvider from "../../modules/getSessionUserProvider";

// CSS
import "./style/ProjectsComponent.scss";
import IProject from "../../interfaces/IProject";

const ProjectsComponent = ({ done }: { done: boolean | null }) => {
  const [userStringfied, setUserStringfied] = getUserSessionState();
  const userSession = getSessionUserProvider(userStringfied) || null;

  const projects = userSession
    ? done == null
      ? userSession.projects
      : userSession.projects.filter(
          (project) => project.status == `${done ? "done" : "ongoing"}`,
        )
    : null;

  const projectsColumns = projectsToColumnProjects(projects);

  function projectsToColumnProjects(projectParam: IProject[] | null) {
    if (projectParam) {
      const _columns: IProject[][] = [];
      let _obj: IProject[] = [];

      projectParam?.map((project, index) => {
        const indexPlusOne = index + 1;

        if (indexPlusOne % 3 === 0) {
          _obj.push(project);
          _columns.push(_obj);
          _obj = [];
        } else {
          _obj.push(project);
        }
      });

      return _columns;
    }

    return null;
  }

  return (
    <div className="projectsArea">
      {projectsColumns && projects ? (
        projectsColumns.map((projectColumn) => {
          return (
            <div className="projectsArea__column" key={idUniqueV2()}>
              {projectColumn.map((project) => {
                const { imageLink, name } = project;

                return (
                  <div
                    key={idUniqueV2()}
                    className="projectsArea__column__project"
                    style={{
                      backgroundImage: `url(${imageLink})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <h1>{name}</h1>
                  </div>
                );
              })}
            </div>
          );
        })
      ) : (
        <h1>No Project</h1>
      )}
    </div>
  );
};

export { ProjectsComponent };
