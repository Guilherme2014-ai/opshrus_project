// Dependencies
import React from "react";

// Interfaces
import IDivisor from "../interfaces/IDivisor";

// CSS
import "./style/LeftSideBarComponent.scss";
import { SideBarIconComponent } from "./minor/SideBarIconComponent";
import { idUniqueV2 } from "id-unique-protocol";

const LeftSideBarComponent = ({ divisors }: { divisors: IDivisor[] }) => {
  return (
    <div>
      {divisors.map((divisor) => {
        const { title, sideBarsIcons } = divisor;

        return (
          <div key={idUniqueV2()}>
            <h1>{title}</h1>
            {sideBarsIcons.map((sideBarIcon) => {
              const { title, svgLink } = sideBarIcon;

              return <SideBarIconComponent title={title} svgLink={svgLink} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export { LeftSideBarComponent };
