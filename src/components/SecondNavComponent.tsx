// Dependencies
import React from "react";

// Components
import { Avatar } from "@mui/material";

// Defaults
import users from "../mockedData/users";

// CSS
import "./style/SecondNavComponent.scss";

const SecondNavComponent = () => {
  const user = users.getUserByName("Thiago");

  return (
    <nav className="mainNav">
      <h2>Contenta</h2>
      <div>
        <small>{user?.name.toLocaleUpperCase()}</small>{" "}
        <Avatar alt="Remy Sharp" src={user?.profile_picture} />
      </div>
    </nav>
  );
};

export { SecondNavComponent };
