// Dependencies
import React, { Dispatch, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Defaults
import users from "./mockedData/users";

// Contexts

// Components
import { AboutUsComponent } from "./components/AboutUsComponent";

// CSS
import "./App.scss";
import { MainPageComponent } from "./components/MainPageComponent";

// Others
React.createContext(null);

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/about_us" element={<AboutUsComponent />}></Route>
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
