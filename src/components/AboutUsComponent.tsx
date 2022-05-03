// Dependencies
import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import Nav from "./Nav";
import { Circle } from "./minor/Circle";
import { TiVideo, TiWorld } from "react-icons/ti";
import { BiMoviePlay } from "react-icons/bi";
import { HiPhotograph } from "react-icons/hi";
import { BsPencil, BsEmojiSunglassesFill } from "react-icons/bs";
import { FaMeteor } from "react-icons/fa";

// CSS
import "./style/AboutUsComponent.scss";

const AboutUsComponent = () => {
  const navigate = useNavigate();
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
              <p onClick={() => navigate("/signup")}>Join our Network</p>
              <p>Work with us</p>
            </div>
          </div>
        </div>
        <div className="howWeDoTt__container">
          <Circle
            gradientBackground="linear-gradient(210.31deg, #715AFF -11.63%, #E682FF 105.87%)"
            diameter="145.48px"
            top="20%"
            right="0"
            bottom="0"
            left="50%"
          />
          <Circle
            gradientBackground="linear-gradient(210.31deg, #715AFF -11.63%, #E682FF 105.87%)"
            diameter="345.48px"
            top="30%"
            right="0"
            bottom="0"
            left="5%"
          />
          <Circle
            gradientBackground="linear-gradient(324deg, yellow 0%, #FF6108 100%)"
            diameter="345.48px"
            top="53%"
            right="0"
            bottom="0"
            left="70%"
          />
          <div className="howWeDoTt__container__title">
            <h1>
              <strong>
                HOW <br /> WE DO <br /> IT
              </strong>
            </h1>
          </div>
          <div className="howWeDoTt__container__card">
            <div className="howWeDoTt__container__card__textBox">
              <h3>PROBLEM</h3>
              <p>
                To find the solution that suits you best, we must first identify
                what and where your pain points really are. At Contenta, we
                offer an exhaustive 360-degree consultation that will take a
                close look at your unique situation from all angles, helping you
                find your improvement areas and laying a solid foundation for
                your business.
              </p>
            </div>
            <br />
            <div className="howWeDoTt__container__card__textBox">
              <h3>PROCESS</h3>
              <p>
                We have access to experts who can help you in every stage of
                your business, from validating your idea and getting your
                company off the ground all the way to marketing your brand and
                optimizing your sales strategies. Find all the skills that you
                need in one place without going through the tedious and
                expensive process of hiring each one of them separately.
              </p>
            </div>
            <br />
            <div className="howWeDoTt__container__card__textBox">
              <h3>RESULT</h3>
              <p>
                Your work is not done once your business is operational, and
                neither is ours. At Contenta, we have specialists who can
                analyze your company’s performance and recommend the necessary
                adjustments to meet and even exceed your business goals. It is a
                continuous cycle of planning, implementation, analysis, and
                improvement, ensuring that you are ahead of the curve and your
                competition at all times.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutUs__mainArea__horizontalGradient">s</div>
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
            gradientBackground="linear-gradient(210.31deg, #715AFF -11.63%, #E682FF 105.87%)"
            diameter="145.48px"
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
            gradientBackground="linear-gradient(210.31deg, #715AFF -11.63%, #E682FF 105.87%)"
            diameter="145.48px"
            top="25%"
            right="0"
            bottom="0"
            left="13%"
          />
          <Circle
            gradientBackground="linear-gradient(210.31deg, #715AFF -11.63%, #E682FF 105.87%)"
            diameter="172.53px"
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
            gradientBackground="linear-gradient(210.31deg, #715AFF -11.63%, #E682FF 105.87%)"
            diameter="328.67px"
            top="70%"
            right="0"
            bottom="0"
            left="20%"
          />
          <Circle
            gradientBackground="linear-gradient(210.31deg, #FF6108 -11.63%, #FFE608 105.87%)"
            diameter="146.32px"
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
      <div className="aboutUs__workWithUs">
        <h2>Work With Us</h2>
        <div className="aboutUs__workWithUs__sections">
          <div className="aboutUs__workWithUs__sections__section">
            <div className="aboutUs__workWithUs__sections__section__wrapper opaque">
              <FaMeteor />
            </div>
            <p>Branding</p>
          </div>

          <div className="aboutUs__workWithUs__sections__section">
            <div className="aboutUs__workWithUs__sections__section__wrapper opaque">
              <TiVideo />
            </div>
            <p>Animation</p>
          </div>

          <div className="aboutUs__workWithUs__sections__section">
            <div className="aboutUs__workWithUs__sections__section__wrapper opaque">
              <BsPencil />
            </div>
            <p>Web / UI Design</p>
          </div>

          <div className="aboutUs__workWithUs__sections__section">
            <div className="aboutUs__workWithUs__sections__section__wrapper opaque">
              <HiPhotograph />
            </div>
            <p>Photography</p>
          </div>

          <div className="aboutUs__workWithUs__sections__section">
            <div className="aboutUs__workWithUs__sections__section__wrapper opaque">
              <BiMoviePlay />
            </div>
            <p>Video</p>
          </div>

          <div className="aboutUs__workWithUs__sections__section">
            <div className="aboutUs__workWithUs__sections__section__wrapper opaque">
              <TiWorld />
            </div>
            <p>3D</p>
          </div>

          <div className="aboutUs__workWithUs__sections__section">
            <div className="aboutUs__workWithUs__sections__section__wrapper opaque">
              <BsEmojiSunglassesFill />
            </div>
            <p>Social Media</p>
          </div>

          <div className="aboutUs__workWithUs__sections__section">
            <div className="aboutUs__workWithUs__sections__section__wrapper opaque"></div>
            <p>Kažkas</p>
          </div>
        </div>
      </div>
      <div className="aboutUs__joinNetwork__container">
        <div className="aboutUs__joinNetwork">
          <div className="aboutUs__joinNetwork__mainContent">
            <div className="aboutUs__joinNetwork__mainContent__textBox">
              <h1>
                JOIN OUR <br /> NETWORK
              </h1>
              <p>
                It’s a big big world, but we have found a way to make it small
                for you. Contenta has the largest pool of the best talents from
                across the globe, and we offer you a direct portal to each of
                them. Whether you need someone to help you set up your business,
                find financing solutions, or optimize your processes, we’ve got
                you covered, whatever stage of growth you are in.
                <br />
                <br />
                If you are looking for a great career opportunity with unlimited
                potential for growth, join us now. You can work with amazing
                clients from all over the world at your own pace, and from
                anywhere you want.
              </p>
            </div>{" "}
            <div className="aboutUs__joinNetwork__mainContent__circleArea">
              <Circle
                gradientBackground="linear-gradient(38deg, rgba(177,199,255,1) 0%, rgba(8,122,255,1) 100%)"
                diameter="300px"
                top="0"
                right="0"
                bottom="0"
                left="0"
                position="static"
              />
            </div>
          </div>
          <div
            className="aboutUs__joinNetwork__becameCreator"
            onClick={() => navigate("/signup")}
          >
            <span>BECOME A CONTENT CREATOR</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AboutUsComponent };
