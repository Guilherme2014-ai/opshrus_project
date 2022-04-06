// Dependencies
import React from "react";

// Components
import { LeftSideBarComponent } from "./LeftSideBarComponent";
import { SecondNavComponent } from "./SecondNavComponent";

// Defaults
import iconsPath from "../defaults/iconsPath";

// CSS
import "./style/DashboardComponent.scss";

const DashboardComponent = () => {
  return (
    <section className="main_dashboard_section">
      <SecondNavComponent />

      <div className="content_area">
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
        <div className="projects_dashboard">
          <h1>Dashboard</h1>
          <ul>
            <li>Ongoing Projects</li>
            <li>Complete Projects</li>
            <li>Messages</li>
          </ul>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export { DashboardComponent };
