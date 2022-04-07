// Dependencies
import React from "react";
import { idUniqueV2 } from "id-unique-protocol";

// Interfaces
import IUserSession from "../interfaces/IUserSession";

// Defaults
import users from "../mockedData/users";

// CSS
import "./style/DashboardComponent.scss";

const DashboardComponent = () => {
  const user = users.getUserByName("Thiago") as unknown as IUserSession;

  return (
    <div className="mainDashboard__ContentArea__ProjectsDashboard">
      <h1>Dashboard</h1>
      <ul>
        <li>Ongoing Projects</li>
        <li>Complete Projects</li>
        <li>Messages</li>
      </ul>
      <div>
        {user.projects.map((project) => {
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
      </div>
    </div>
  );
};

export { DashboardComponent };
