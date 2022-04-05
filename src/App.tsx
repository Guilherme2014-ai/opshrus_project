// Dependencies
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// CSS
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<h1>Dashboard</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
