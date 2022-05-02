// Dependencies
import React from "react";

// Interface
import ICircle from "../../interfaces/ICircleComponent";

// CSS
import "./style/Circle.scss";

const Circle = (circleData: ICircle) => (
  <div
    className="circle"
    style={{
      background: circleData.gradientBackground,
      width: circleData.diameter,
      height: circleData.diameter,
      top: circleData.top,
      right: circleData.right,
      bottom: circleData.bottom,
      left: circleData.left,
      position: circleData.position ? circleData.position : "absolute",
    }}
  ></div>
);

export { Circle };
