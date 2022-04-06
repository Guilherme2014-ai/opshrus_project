// Dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { NavComponent } from "./components/NavComponent";

// CSS
import "./App.scss";
import { DashboardComponent } from "./components/DashboardComponent";

function App() {
  return (
    <Router>
      <NavComponent />
      <Routes>
        <Route path="/dashboard" element={<DashboardComponent />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
