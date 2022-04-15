/* eslint-disable @typescript-eslint/no-explicit-any */
// Dependencies
import React, { Dispatch, useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Defaults
import users from "./mockedData/users";

// Components
import { AboutUsComponent } from "./components/AboutUsComponent";
import { MainPageComponent } from "./components/MainPageComponent";
import { userSessionStateContext } from "./contexts/userSessionStateContext";
import { CreateMeetingComponent } from "./components/CreateMeetingComponent";
import SignUpComponent from "./components/SignUpComponent";

// CSS
import "./App.scss";

function App() {
  const [userStringfied, setUserStringfied] = useState(null) as unknown as [
    string,
    Dispatch<string>,
  ];

  useEffect(() => {
    const someUser = users.getUserByName("Thiago");
    const userStringfied = JSON.stringify(someUser);

    setUserStringfied(userStringfied);
  });

  return (
    <userSessionStateContext.Provider
      value={[userStringfied, setUserStringfied]}
    >
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
