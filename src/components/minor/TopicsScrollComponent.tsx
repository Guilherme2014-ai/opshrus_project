// Dependencies
import React, { useState } from "react";

// Defaults
import iconsPath from "../../defaults/iconsPath";
import { topics } from "../../mockedData/topics";

// CSS
import "./style/TopicsScrollComponent.scss";

// Others
type TSides = "left" | "right";
let counter = 0;

const TopicsScrollComponent = () => {
  const jump = 380;

  const topicPerClick = 2;
  const limit = topics.length / topicPerClick;

  const [clickCounter, setClickCounter] = useState(1);

  function scrollMovimentationHandler(side: TSides) {
    const scrollElement = document.getElementById(
      "topicsScrollArea__scrollArea",
    ) as HTMLElement;

    if (side === "right") {
      counter -= jump;
      setClickCounter(clickCounter + 1);
    } else {
      counter += jump;
      setClickCounter(clickCounter - 1);
    }

    console.log(counter, clickCounter);

    scrollElement.style.transform = `translateX(${counter}px)`;
  }

  return (
    <div className="topicsScrollArea">
      {counter < 0 && (
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
      )}
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
      {clickCounter < limit ? (
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
      ) : (
        <div></div>
      )}
    </div>
  );
};

export { TopicsScrollComponent };
