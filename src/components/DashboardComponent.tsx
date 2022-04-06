// Dependencies
import React from "react";

// Components
import { LeftSideBarComponent } from "./LeftSideBarComponent";

// Defaults
import iconsPath from "../defaults/iconsPath";

// CSS
import "./style/DashboardComponent.scss";
import { SecondNavComponent } from "./SecondNavComponent";

const DashboardComponent = () => {
  return (
    <section className="main_dashboard_section">
      <SecondNavComponent />
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
    </section>
  );
};

export { DashboardComponent };
