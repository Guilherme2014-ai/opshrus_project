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
            <div className="aboutUs__howWeDoIt__container__contentWrapper__content opaque">
              <div className="aboutUs__howWeDoIt__container__contentWrapper__content__container">
                <h3>Problem</h3>
                <p>
                  To find the solution that suits you best, we must first
                  identify what and where your pain points really are. At
                  Contenta, we offer an exhaustive 360-degree consultation that
                  will take a close look at your unique situation from all
                  angles, helping you find your improvement areas and laying a
                  solid foundation for your business.{" "}
                </p>
              </div>

              <div className="aboutUs__howWeDoIt__container__contentWrapper__content__container">
                <h3>Process</h3>
                <p>
                  We have access to experts who can help you in every stage of
                  your business, from validating your idea and getting your
                  company off the ground all the way to marketing your brand and
                  optimizing your sales strategies. Find all the skills that you
                  need in one place without going through the tedious and
                  expensive process of hiring each one of them separately.{" "}
                </p>
              </div>

              <div className="aboutUs__howWeDoIt__container__contentWrapper__content__container">
                <h3>Result</h3>
                <p>
                  Your work is not done once your business is operational, and
                  neither is ours. At Contenta, we have specialists who can
                  analyze your company’s performance and recommend the necessary
                  adjustments to meet and even exceed your business goals. It is
                  a continuous cycle of planning, implementation, analysis, and
                  improvement, ensuring that you are ahead of the curve and your
                  competition at all times.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutUsComponent };
