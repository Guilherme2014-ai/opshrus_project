import Contact from "./minor/Contact";
import { FiFacebook, FiMail, FiLinkedin, FiInstagram } from "react-icons/fi";

import "./style/Nav.scss";

export default function Nav() {
  return (
    <nav>
      <div className="logo">
        <h1>Contenta</h1>
      </div>
      <div className="useful-links">
        <div className="blog">
          <h2>Blog</h2>
        </div>
        <div className="links">
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
