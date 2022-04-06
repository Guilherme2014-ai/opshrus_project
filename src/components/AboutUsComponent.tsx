// Dependencies
import React from "react";

// Components
import Nav from "./Nav";

// CSS
import "./style/AboutUsComponent.scss";

const AboutUsComponent = () => {
  return (
    <section className="aboutUsMain">
      <Nav />

      <div className="aboutUsMain__mainArea">
        <div className="aboutUsMain__mainArea__mainText">
          <div className="aboutUsMain__mainArea__mainText__container"></div>
        </div>
      </div>
    </section>
  );
};

export { AboutUsComponent };
