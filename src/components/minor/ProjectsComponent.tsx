// Dependencies
import React from "react";
import { idUniqueV2 } from "id-unique-protocol";

// Interfaces
import IUserSession from "../../interfaces/IUserSession";

// Defaults
import users from "../../mockedData/users";

const ProjectsComponent = ({ done }: { done: boolean }) => {
  const user = users.getUserByName("Thiago") as unknown as IUserSession;
  const projects = user.projects.filter(
    (project) => project.status == `${done ? "done" : "ongoing"}`,
  );

  return (
    <>
      {projects.map((project) => {
        const { imageLink, name } = project;

        return (
          <div
            key={idUniqueV2()}
            className="mainDashboard__ContentArea__ProjectsDashboard__ProjectImage"
            style={{
              backgroundImage: `url(${imageLink})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "300px",
              height: "200px",
            }}
          >
            <h1>{name}</h1>
          </div>
        );
      })}
    </>
  );
};

export { ProjectsComponent };
