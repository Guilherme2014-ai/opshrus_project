/* eslint-disable @typescript-eslint/no-unused-vars */
// Dependencies
import React, { useEffect, useState } from "react";
import { idUniqueV2 } from "id-unique-protocol";

// Interfaces
import { topics } from "../../mockedData/topics";

// Defaults
import iconsPath from "../../defaults/iconsPath";

// CSS
import "./style/TopicsScrollComponent.scss";

// Responsividade faltando

const TopicsScrollComponent = () => {
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
      <div className="topicsScroll--horizontalGradient"></div>
      <div
        className="topicsScroll__intermediate"
        id="topicsScroll__intermediate"
      >
        {topics.map((topic) => (
          <div className="topicsScroll__intermediate__topic" key={idUniqueV2()}>
            <strong>{topic.name}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export { TopicsScrollComponent };
