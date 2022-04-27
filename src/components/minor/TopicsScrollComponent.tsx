/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React, { useEffect, useState } from "react";
import { idUniqueV2 } from "id-unique-protocol";

// Contexts
import { getWhiteThemeState } from "../../contexts/whiteThemeContext";

// Interfaces
import { topics } from "../../mockedData/topics";

// Defaults
import { defaultsTransition } from "../../defaults/pre-styles";
import iconsPath from "../../defaults/iconsPath";
import colors from "../../defaults/colors";

// CSS
import "./style/TopicsScrollComponent.scss";

const TopicsScrollComponent = () => {
  const [whiteTheme, setWhiteTheme] = getWhiteThemeState() as [
    boolean,
    React.Dispatch<boolean>,
  ];

  useEffect(() => {
    const topicsScroll__intermediateElement = document.getElementById(
      "topicsScroll__intermediate",
    ) as HTMLElement;

    topicsScroll__intermediateElement.addEventListener(
      "wheel",
      wheelJumpHandler,
    );

    topicsScroll__intermediateElement.addEventListener(
      "mouseenter",
      () => (document.body.style.overflowY = "hidden"),
    );
    topicsScroll__intermediateElement.addEventListener(
      "mouseleave",
      () => (document.body.style.overflowY = "auto"),
    );

    function wheelJumpHandler(e: WheelEvent) {
      const isPositive = e.deltaY < 0;
      const jump = 200;

      topicsScroll__intermediateElement.scrollBy(isPositive ? jump : -jump, 0);
    }
  });

  return (
    <div className="topicsScroll" id="topicsScroll">
      <div
        className="topicsScroll--horizontalGradient"
        style={{
          background: whiteTheme
            ? `linear-gradient(to left, ${colors.primaryColorWhiteTheme} 0.5%, transparent 20%)`
            : `linear-gradient(to left, ${colors.primaryColor} 0.5%, transparent 20%)`,
        }}
      ></div>
      <div
        className="topicsScroll__intermediate"
        id="topicsScroll__intermediate"
      >
        {topics.map((topic) => (
          <div
            className="topicsScroll__intermediate__topic"
            key={idUniqueV2()}
            style={{
              boxShadow: whiteTheme ? "rgb(189, 189, 189) 4px 8px 30px" : "",
              background: whiteTheme
                ? `linear-gradient(324deg, ${colors.primaryColorWhiteTheme} 0%,#715AFF 150%)`
                : "linear-gradient(324deg, rgba(48,52,63,1) 0%, #E5E5E5 150%)",
            }}
          >
            <strong>{topic.name}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export { TopicsScrollComponent };
