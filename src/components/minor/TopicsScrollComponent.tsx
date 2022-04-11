// Dependencies
import React from "react";

// Defaults
import iconsPath from "../../defaults/iconsPath";
import { topics } from "../../mockedData/topics";

// CSS
import "./style/TopicsScrollComponent.scss";

// Others
type TSides = "left" | "right";

const TopicsScrollComponent = () => {
  let counter = 0;

  function scrollMovimentationHandler(side: TSides) {
    const scrollElement = document.getElementById(
      "topicsScrollArea__scrollArea",
    ) as HTMLElement;

    side === "right" ? (counter -= 370) : (counter += 370);

    scrollElement.style.transform = `translateX(${counter}px)`;
  }

  return (
    <div className="topicsScrollArea">
      <div
        className="topicsScrollArea__positionActionLeft"
        onClick={() => scrollMovimentationHandler("left")}
      >
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
      <div
        className="topicsScrollArea__scrollArea"
        id="topicsScrollArea__scrollArea"
      >
        <ul className="topicsScrollArea__scrollArea__topics">
          {topics.map((topic) => (
            <li
              className="topicsScrollArea__scrollArea__topics__topic"
              key={topic.id}
            >
              {topic.name}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="topicsScrollArea__positionActionRight"
        onClick={() => scrollMovimentationHandler("right")}
      >
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
