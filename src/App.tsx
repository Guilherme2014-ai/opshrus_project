// Dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { AboutUsComponent } from "./components/AboutUsComponent";

// CSS
import "./App.scss";
import { DashboardComponent } from "./components/DashboardComponent";

function App() {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/about_us" element={<AboutUsComponent />}></Route>
          <Route path="/dashboard" element={<DashboardComponent />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
