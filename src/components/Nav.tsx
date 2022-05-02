// Dependencies
import React, { useState } from "react";
import Contact from "./minor/Contact";
import { FiFacebook, FiMail, FiLinkedin, FiInstagram } from "react-icons/fi";

// CSS
import "./style/Nav.scss";

export default function Nav() {
  const [background, setBackground] = useState(false);

  useState(() => {
    window.addEventListener("scroll", scrollYHandler);

    function scrollYHandler() {
      const scrollY = window.scrollY;

      scrollY === 0 ? setBackground(false) : setBackground(true);
    }
  });

  return (
    <nav
      style={{
        transition: "all ease 1s",
        backgroundColor: background ? "#715AFF" : "",
      }}
    >
      <div className="nav__logo">
        <h1>Contenta</h1>
      </div>
      <div className="nav__usefulLinks">
        <div className="nav__usefulLinks__blog">
          <h2>Blog</h2>
        </div>
        <div className="nav__usefulLinks__links">
          <Contact>
            <FiFacebook />
          </Contact>
          <Contact>
            <FiMail />
          </Contact>
          <Contact>
            <FiLinkedin />
          </Contact>
          <Contact>
            <FiInstagram />
          </Contact>
        </div>
      </div>
    </nav>
  );
}
