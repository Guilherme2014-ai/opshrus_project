/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencie
import React from "react";
import { Link } from "react-router-dom";
import { idUniqueV2 } from "id-unique-protocol";

// Contexts
import { getWhiteThemeState } from "../../contexts/whiteThemeContext";

// defaults
import { defaultsTransition } from "../../defaults/pre-styles";
import colors from "../../defaults/colors";

// Interfaces
import ISideBarIconComponent from "../../interfaces/ISideBarIconComponent";

// CSS
import "./style/SideBarIconComponent.scss";

const SideBarIconComponent = ({
  svgLink,
  title,
  pageSelected,
}: ISideBarIconComponent) => {
  const [whiteTheme, setWhiteTheme] = getWhiteThemeState() as [
    boolean,
    React.Dispatch<boolean>,
  ];
  const samePage = title.toLocaleLowerCase() === pageSelected;

  return (
    <Link to={`/${title}`}>
      <div className="sideBar__iconArea" key={idUniqueV2()}>
        <svg
          key={idUniqueV2()}
          style={{
            transition: defaultsTransition.themeChange,
            backgroundColor: whiteTheme
              ? colors.thirdColor
              : colors.secondColor,
          }}
          className={samePage ? "sideBar__icon-selected" : "sideBar__icon"}
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="36"
          fill="white"
          viewBox="0 0 16 16"
        >
          <path d={svgLink} />
        </svg>
        <small
          className={
            whiteTheme
              ? "sideBar__iconArea__title--whiteTheme"
              : "sideBar__iconArea__title--blackTheme"
          }
        >
          {title}
        </small>
      </div>
    </Link>
  );
};

export { SideBarIconComponent };
