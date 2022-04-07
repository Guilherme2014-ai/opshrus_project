// Dependencie
import React from "react";
import { idUniqueV2 } from "id-unique-protocol";

// Interfaces
import ISideBarIconComponent from "../../interfaces/ISideBarIconComponent";

// CSS
import "./style/SideBarIconComponent.scss";

const SideBarIconComponent = ({ svgLink, title }: ISideBarIconComponent) => {
  return (
    <div className="sideBar__iconArea" key={idUniqueV2()}>
      <svg
        key={idUniqueV2()}
        className="sideBar__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="36"
        fill="white"
        viewBox="0 0 16 16"
      >
        <path d={svgLink} />
      </svg>
      <small>{title}</small>
    </div>
  );
};

export { SideBarIconComponent };
