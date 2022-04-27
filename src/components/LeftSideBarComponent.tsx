/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React from "react";
import { idUniqueV2 } from "id-unique-protocol";

// Contexts
import { getWhiteThemeState } from "../contexts/whiteThemeContext";

// Components
import { SideBarIconComponent } from "./minor/SideBarIconComponent";

// Defaults
import { defaultsTransition } from "../defaults/pre-styles";

// Interfaces
import IDivisor from "../interfaces/IDivisor";
import TAllPagesLeftBar from "../interfaces/TAllPagesLeftBar";

// CSS
import "./style/LeftSideBarComponent.scss";
import colors from "../defaults/colors";

const LeftSideBarComponent = ({
  divisors,
  pageSelected,
}: {
  divisors: IDivisor[];
  pageSelected: TAllPagesLeftBar;
}) => {
  const [whiteTheme, setWhiteTheme] = getWhiteThemeState() as [
    boolean,
    React.Dispatch<boolean>,
  ];

  return (
    <div
      className="mainLeftSideBar"
      style={{
        transition: defaultsTransition.themeChange,
        backgroundColor: whiteTheme
          ? colors.primaryColorWhiteTheme
          : colors.primaryColor,
      }}
    >
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
