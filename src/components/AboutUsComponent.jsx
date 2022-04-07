// Dependencies
import React from "react";

// Components
import Nav from "./Nav";
import Circle from "./minor/Circle";

// CSS
import "./style/AboutUsComponent.scss";

const AboutUsComponent = () => {
  return (
    <section className="aboutUs">
      <Nav />

      <div className="aboutUs__mainArea">
        <div className="aboutUs__mainArea__mainText">
          <div className="aboutUs__mainArea__mainText__container">
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
            <div className="aboutUs__mainArea__mainText__container__contact">
              <p>Join our Network</p>
              <p>Work with us</p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutUs__howWeDoIt">
        <div className="aboutUs__howWeDoIt__container">
          <h2>How we do it</h2>
          <div className="aboutUs__howWeDoIt__container__contentWrapper">
            <Circle
              gradient="linear-gradient(210.31deg, #FF6108 -11.63%, #FFE608 105.87%)"
              width="92.99px"
              height="92.99px"
              top="0"
              right="0"
              bottom="0"
              left="2%"
            />
            <Circle
              gradient="linear-gradient(210.31deg, #715AFF -11.63%, #E682FF 105.87%)"
              width="214.86px"
              height="214.86px"
              top="55%"
              right="0"
              bottom="0"
              left="-80px"
            />

            <Circle
              gradient="linear-gradient(210.31deg, #FF6108 -11.63%, #FFE608 105.87%)"
              width="308.7px"
              height="308.7px"
              top="20%"
              right="0"
              bottom="0"
              left="80%"
            />
            <div className="aboutUs__howWeDoIt__container__contentWrapper__content"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutUsComponent };
