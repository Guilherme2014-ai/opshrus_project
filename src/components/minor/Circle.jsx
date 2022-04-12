import React from "react";
import "./style/Circle.scss";

export default function Circle(props) {
  return (
    <div
      className="circle"
      style={{
        background: props.gradient,
        width: props.width,
        height: props.height,
        top: props.top,
        right: props.right,
        bottom: props.bottom,
        left: props.left,
      }}
    ></div>
  );
}
