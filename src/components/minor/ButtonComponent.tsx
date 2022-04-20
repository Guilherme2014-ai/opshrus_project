/* eslint-disable @typescript-eslint/no-explicit-any */
// Dependencies
import React from "react";

// CSS
import "./style/ButtonComponent.scss";

const ButtonComponent = ({
  title,
  textColor,
  backgroundColor,
  onClick,
}: {
  title: string;
  textColor: string;
  backgroundColor: string;
  onClick?: () => any;
}) => (
  <button
    style={{
      background: backgroundColor && backgroundColor,
      color: textColor && textColor,
    }}
    onClick={onClick}
    className="button"
    id="button"
  >
    {title}
  </button>
);

export { ButtonComponent };
