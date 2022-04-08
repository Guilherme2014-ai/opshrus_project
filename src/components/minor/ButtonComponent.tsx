// Dependencies
import React from "react";

// CSS
import "./style/ButtonComponent.scss";

const ButtonComponent = ({
  title,
  textColor,
  backgroundColor,
}: {
  title: string;
  textColor: string;
  backgroundColor: string;
}) => (
  <button
    style={{
      background: backgroundColor && backgroundColor,
      color: textColor && textColor,
    }}
    className="button"
    id="button"
  >
    {title}
  </button>
);

export { ButtonComponent };
