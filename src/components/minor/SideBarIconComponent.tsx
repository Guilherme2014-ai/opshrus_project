// Dependencie
import React from "react";
import { idUniqueV2 } from "id-unique-protocol";

// Components
import ISideBarIconComponent from "../../interfaces/ISideBarIconComponent";

// CSS
import "./style/SideBarIconComponent.scss";

const SideBarIconComponent = ({ svgLink, title }: ISideBarIconComponent) => {
  return (
    <div key={idUniqueV2()} className="icon_sidebar_icon_title">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="36"
        fill="white"
        className="sidebar_icon"
        viewBox="0 0 16 16"
      >
        <path d={svgLink} />
      </svg>
      <small>{title}</small>
    </div>
  );
};

export { SideBarIconComponent };
