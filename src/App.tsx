// Dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { AboutUsComponent } from "./components/AboutUsComponent";

// CSS
import "./App.scss";

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/about_us" element={<AboutUsComponent />}></Route>
          <Route path="/dashboard" element={<h1>Dashboard</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
