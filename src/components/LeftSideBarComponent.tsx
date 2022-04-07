// Dependencies
import React from "react";
import { idUniqueV2 } from "id-unique-protocol";

// Components
import { SideBarIconComponent } from "./minor/SideBarIconComponent";

// Interfaces
import IDivisor from "../interfaces/IDivisor";
import TAllPagesLeftBar from "../interfaces/TAllPagesLeftBar";

// CSS
import "./style/LeftSideBarComponent.scss";

const LeftSideBarComponent = ({
  divisors,
  pageSelected,
}: {
  divisors: IDivisor[];
  pageSelected: TAllPagesLeftBar;
}) => {
  return (
    <div className="mainLeftSideBar">
      {divisors.map((divisor) => {
        const { title, sideBarsIcons } = divisor;

        return (
          <div key={idUniqueV2()} className="mainLeftSideBar__divisor">
            <h1 className="mainLeftSideBar__divisor__title">{title}</h1>
            {sideBarsIcons.map((sideBarIcon) => {
              const { title, svgLink } = sideBarIcon;

              return (
                <SideBarIconComponent
                  title={title}
                  pageSelected={pageSelected}
                  svgLink={svgLink}
                  key={idUniqueV2()}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export { LeftSideBarComponent };
