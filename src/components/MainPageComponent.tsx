// Dependencies
import React from "react";

// Interfaces
import IMainPage from "../interfaces/IMainPage";

// Components
import { DashboardComponent } from "./DashboardComponent";
import { MyProfileComponent } from "./MyProfileComponent";
import { LeftSideBarComponent } from "./LeftSideBarComponent";
import { SecondNavComponent } from "./SecondNavComponent";
import { BrowserPage } from "./BrowserPage";

// Defaults
import iconsPath from "../defaults/iconsPath";

// CSS
import "./style/MainPageComponent.scss";

// Others
const pages = {
  home: <DashboardComponent />,
  search: <h1>Search</h1>,
  featured: <h1>Featured</h1>,
  profile: <MyProfileComponent />,
  projects: <h1>Projects</h1>,
  clients: <h1>Clients</h1>,
  browse: <BrowserPage />,
};

const MainPageComponent = ({ namePage }: IMainPage) => {
  return (
    <section className="mainPage">
      <SecondNavComponent />

      <div className="mainPage__ContentArea">
        {" "}
        <LeftSideBarComponent
          pageSelected={namePage}
          divisors={[
            {
              title: "MENU",
              sideBarsIcons: [
                {
                  title: "Home",
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
              title: "CREATOR MENU",
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
        {pages[namePage]}
      </div>
    </section>
  );
};

export { MainPageComponent };
