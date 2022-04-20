/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React from "react";
import { idUniqueV2 } from "id-unique-protocol";

// Interfaces
import IProject from "../../interfaces/IProject";

// Context
import { getUserSessionState } from "../../contexts/userSessionStateContext";

// Defaults
import colors from "../../defaults/colors";

// Modules
import getSessionUserProvider from "../../modules/getSessionUserProvider";

// CSS
import "./style/ProjectsComponent.scss";

const ProjectsComponent = ({
  done,
  background,
}: {
  done: boolean | null;
  background?: boolean;
}) => {
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

        if (indexPlusOne % 3 === 0 || indexPlusOne === projectParam.length) {
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
    <div
      className="projectsArea"
      style={{
        backgroundColor: background === false ? "" : colors.secondColor,
      }}
    >
      {projectsColumns && projects ? (
        projectsColumns.map((projectColumn) => {
          return (
            <div className="projectsArea__column" key={idUniqueV2()}>
              {projectColumn.map((project, index) => {
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
                    <h1 className="projectsArea__column__project__title">
                      {name}
                    </h1>
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
