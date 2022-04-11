// Dependencies
import React from "react";

// Defaults
import iconsPath from "../defaults/iconsPath";

// CSS
import "./style/TopicsScrollComponent.scss";

const TopicsScrollComponent = () => {
  return (
    <div className="topicsScrollArea">
      <div className="topicsScrollArea__positionActionLeft">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="topicsScrollArea__positionAction__icon"
          viewBox="0 0 16 16"
        >
          <path d={iconsPath.arrowLeft} />
        </svg>
      </div>
      <div className="topicsScrollArea__scrollArea">
        <ul className="topicsScrollArea__scrollArea__topics">
          <li className="topicsScrollArea__scrollArea__topics__topic">Web</li>
          <li className="topicsScrollArea__scrollArea__topics__topic">
            Animations
          </li>
          <li className="topicsScrollArea__scrollArea__topics__topic">
            Image Art
          </li>
          <li className="topicsScrollArea__scrollArea__topics__topic">
            Image Art
          </li>
          <li className="topicsScrollArea__scrollArea__topics__topic">
            Image Art
          </li>
          <li className="topicsScrollArea__scrollArea__topics__topic">
            Image Art
          </li>
          <li className="topicsScrollArea__scrollArea__topics__topic">
            Image Art
          </li>
          <li className="topicsScrollArea__scrollArea__topics__topic">
            Image Art
          </li>
          <li className="topicsScrollArea__scrollArea__topics__topic">
            Image Art
          </li>
          <li className="topicsScrollArea__scrollArea__topics__topic">
            Image Art
          </li>
        </ul>
      </div>
      <div className="topicsScrollArea__positionActionRight">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="topicsScrollArea__positionAction__icon"
          viewBox="0 0 16 16"
        >
          <path d={iconsPath.arrowRight} />
        </svg>
      </div>
    </div>
  );
};

export { TopicsScrollComponent };
