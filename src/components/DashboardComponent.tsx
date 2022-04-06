// Dependencies
import React from "react";

// Components
import { LeftSideBarComponent } from "./LeftSideBarComponent";

// Defaults
import iconsPath from "../defaults/iconsPath";

// CSS
import "./style/DashboardComponent.scss";

const DashboardComponent = () => {
  return (
    <section className="main_dashboard_section">
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
            ],
          },
        ]}
      />
    </section>
  );
};

export { DashboardComponent };
