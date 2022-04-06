// Dependencie
import { idUniqueV2 } from "id-unique-protocol";
import React from "react";
import ISideBarIconComponent from "../../interfaces/ISideBarIconComponent";

// CSS
import "./style/SideBarIconComponent.scss";

const SideBarIconComponent = ({ svgLink, title }: ISideBarIconComponent) => {
  return (
    <div key={idUniqueV2()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="#6F64FC"
        className="sidebar_icon"
        viewBox="0 0 16 17"
      >
        <path d={svgLink} />
      </svg>
      <small>{title}</small>
    </div>
  );
};

export { SideBarIconComponent };
