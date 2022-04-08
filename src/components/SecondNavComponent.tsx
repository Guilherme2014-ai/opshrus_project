// Dependencies
import React from "react";

// Contexts
//

// Components
import { Avatar } from "@mui/material";

// CSS
import "./style/SecondNavComponent.scss";

const SecondNavComponent = () => {
  const userSession = { name: "asdasd", profile_picture: "asdasd" };
  return (
    <nav className="mainNav">
      <h2>Contenta</h2>
      <div>
        <small>{userSession.name.toLocaleUpperCase()}</small>{" "}
        <Avatar alt="Remy Sharp" src={userSession.profile_picture} />
      </div>
    </nav>
  );
};

export { SecondNavComponent };
