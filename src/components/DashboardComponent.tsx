// Dependencies
import React from "react";

// Components
import { LeftSideBarComponent } from "./LeftSideBarComponent";
import { SecondNavComponent } from "./SecondNavComponent";

// Defaults
import iconsPath from "../defaults/iconsPath";
import users from "../mockedData/users";

// CSS
import "./style/DashboardComponent.scss";

const DashboardComponent = () => {
  const user = users.getUserByName("Thiago");

  return (
    <section className="mainDashboard">
      <SecondNavComponent />

      <div className="mainDashboard__ContentArea">
        {" "}
        <LeftSideBarComponent
          divisors={[
            {
              title: "Menu",
              sideBarsIcons: [
                {
                  title: "home",
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
              title: "Creator Menu",
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
        <div className="mainDashboard__ContentArea__ProjectsDashboard">
          <h1>Dashboard</h1>
          <ul>
            <li>Ongoing Projects</li>
            <li>Complete Projects</li>
            <li>Messages</li>
          </ul>
          <div>
            {user?.projects.map((project) => {
              // Tipar tudo isso
              const { imageLink, name } = project;
              return (
                <div
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
      </div>
    </section>
  );
};

export { DashboardComponent };
