import Contact from "./minor/Contact";
import { FiFacebook, FiMail, FiLinkedin, FiInstagram } from "react-icons/fi";

import "./style/Nav.scss";

export default function Nav() {
  return (
    <nav>
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
