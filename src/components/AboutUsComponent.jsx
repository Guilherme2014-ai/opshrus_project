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
          <div className="aboutUsMain__mainArea__mainText__container">
            <h2>
              Build Your Business From the Ground Up With the World’s Best
              Talents
            </h2>
            <p>
              We’ve gathered the best talents in their fields to help transform
              your business idea into a legit money-maker — all in one place.
              Get your business up and running or start a fulfilling career with
              us now.
            </p>
            <div className="aboutUsMain__mainArea__mainText__container__contact">
              <p>Join our Network</p>
              <p>Work with us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutUsComponent };
