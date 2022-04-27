/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Dependencies
import React, { Dispatch, useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Defaults
import users from "./mockedData/users";

// Contexts
import { userSessionStateContext } from "./contexts/userSessionStateContext";
import { whiteThemeContext } from "./contexts/whiteThemeContext";

// Components
import { AboutUsComponent } from "./components/AboutUsComponent";
import { MainPageComponent } from "./components/MainPageComponent";
import { CreateMeetingComponent } from "./components/CreateMeetingComponent";
import SignUpComponent from "./components/SignUpComponent";

// CSS
import "./App.scss";

function App() {
  const [userStringfied, setUserStringfied] = useState(null) as unknown as [
    string,
    Dispatch<string>,
  ];
  const [whiteTheme, setWhiteTheme] = useState(false);

  useEffect(() => {
    document.body.addEventListener("keypress", (event) => {
      const { key } = event;

      if (key === "t") setWhiteTheme(!whiteTheme);
    });
  });

  useEffect(() => {
    const someUser = users.getUserByName("Thiago");
    const userStringfied = JSON.stringify(someUser);

    setUserStringfied(userStringfied);
  });

  return (
    <userSessionStateContext.Provider
      value={[userStringfied, setUserStringfied]}
    >
      <whiteThemeContext.Provider value={[whiteTheme, setWhiteTheme]}>
        <div className="main">
          <Router>
            <Routes>
              <Route path="/" element={<AboutUsComponent />}></Route>
              <Route path="/signup" element={<SignUpComponent />}></Route>
              <Route
                path="/meeting/create"
                element={<CreateMeetingComponent />}
              ></Route>
              <Route
                path="/home"
                element={<MainPageComponent namePage="home" />}
              ></Route>
              <Route
                path="/search"
                element={<MainPageComponent namePage="search" />}
              ></Route>
              <Route
                path="/browse"
                element={<MainPageComponent namePage="browse" />}
              ></Route>
              <Route
                path="/featured"
                element={<MainPageComponent namePage="featured" />}
              ></Route>
              <Route
                path="/profile"
                element={<MainPageComponent namePage="profile" />}
              ></Route>
              <Route
                path="/projects"
                element={<MainPageComponent namePage="projects" />}
              ></Route>
              <Route
                path="/clients"
                element={<MainPageComponent namePage="clients" />}
              ></Route>
            </Routes>
          </Router>
        </div>
      </whiteThemeContext.Provider>
    </userSessionStateContext.Provider>
  );
}

export default App;

/*

  // Um user Apenas sendo recebido
  // const [usersStringfied, setUsersStringfied] = getUserSession();
  const [userSession, setUserSession] = useState("null") as unknown as [
    string,
    Dispatch<string>,
  ];

  useEffect(() => {
    const stringfiedUser = JSON.stringify(users.getUserByName("Thiago"));
    setUserSession(stringfiedUser);
  });

  const userSessionState = [userSession, setUserSession];
*/
