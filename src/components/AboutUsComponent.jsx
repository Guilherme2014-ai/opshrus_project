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
      <div className="aboutUs__whyUs">
        <h2>Why Us?</h2>
        <p>
          Whether you want to start your own business or expand your brand, you
          will need a lot of help. Why not get it all from one place? We have an
          extensive network of the world’s best talents — everything that you
          would ever need for your company today and in the future.{" "}
        </p>

        <div className="aboutUs__whyUs__wrapper">
          <Circle
            gradient="linear-gradient(210.31deg, #715AFF -11.63%, #E682FF 105.87%)"
            width="145.48px"
            height="145.48px"
            top="50%"
            right="0"
            bottom="0"
            left="50%"
          />
          <div
            id="jobondemand"
            className="aboutUs__whyUs__wrapper__container opaque"
          >
            <h3>The Best Talents for Any Job, On Demand </h3>
            <p>
              Our talent pool consists of the best and brightest business
              experts, marketing specialists, and sales strategists from across
              the globe. Each one of them is ready to sign up for the job
              whenever you need their help. No job is too big or too small for
              us. At Contenta, we can help you build your business from scratch
              and see it grow into one of the biggest brands in your industry.
              If you have an existing company and you want to take it to the
              next level, we can help with this too{" "}
            </p>
          </div>
        </div>

        <div className="aboutUs__whyUs__wrapper">
          <Circle
            gradient="linear-gradient(210.31deg, #715AFF -11.63%, #E682FF 105.87%)"
            width="145.48px"
            height="145.48px"
            top="25%"
            right="0"
            bottom="0"
            left="13%"
          />
          <Circle
            gradient="linear-gradient(210.31deg, #715AFF -11.63%, #E682FF 105.87%)"
            width="172.53px"
            height="172.53px"
            top="65%"
            right="0"
            bottom="0"
            left="75%"
          />
          <div
            id="talentsondemand"
            className="aboutUs__whyUs__wrapper__container opaque"
          >
            <h3>Get Everything You Need in One Place</h3>
            <p>
              Building a business from the ground up is a very complex and
              high-risk task. You will need access to a wide range of skill
              sets, and you will need only the best talents to give you the
              highest chances of succeeding. We have done the heavy lifting for
              you by gathering them all in one place. If you work with us, you
              won’t need multiple points of contact to get your business
              running, saving you from all the hassle. You would also be working
              exclusively with highly skilled professionals, reducing the amount
              of risk that you have to deal with.{" "}
            </p>
          </div>
        </div>

        <div className="aboutUs__whyUs__wrapper">
          <Circle
            gradient="linear-gradient(210.31deg, #715AFF -11.63%, #E682FF 105.87%)"
            width="328.67px"
            height="328.67px"
            top="70%"
            right="0"
            bottom="0"
            left="20%"
          />
          <Circle
            gradient="linear-gradient(210.31deg, #FF6108 -11.63%, #FFE608 105.87%)"
            width="146.32px"
            height="146.32px"
            top="70%"
            right="0"
            bottom="0"
            left="75%"
          />
          <div
            id="turnaround"
            className="aboutUs__whyUs__wrapper__container opaque"
          >
            <h3>Quick Turnaround</h3>
            <p>
              Our platform is designed to make things as easy for you as
              possible. We provide shared industry knowledge from experts all
              over the world to help startups take off and businesses grow. At
              Contenta, we develop a personalized approach for each client,
              creating tailored solutions that fit their unique needs and
              maximize their chances of achieving their business goals. With
              this level of customization, we guarantee big transformations and
              quick turnarounds for businesses of all sizes and in any stage of
              growth.{" "}
            </p>
          </div>
        </div>

        <div className="aboutUs__whyUs__wrapper">
          <div
            id="careeroportunities"
            className="aboutUs__whyUs__wrapper__container opaque"
          >
            <h3>Great Career Opportunities</h3>
            <p>
              Our global network of professionals and experts is extensive, but
              we are not done expanding. We continue to attract the best talents
              from all over the world by offering great career opportunities
              with limitless potential for growth and job satisfaction. Join us
              and take charge of your career by deciding when, where, and how
              you carry out each task. Our list of amazing clients is also
              growing, which means more opportunities for you to work and learn
              at the same time.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="aboutUs__whyUs__circleContainer"></div>
    </section>
  );
};

export { AboutUsComponent };
