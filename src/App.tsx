// Dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";

// CSS
import "./App.scss";

function App() {
  return (
    <div className="main">
      <Nav />
      <Router>
        <Routes>
          <Route path="/dashboard" element={<h1>Dashboard</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
