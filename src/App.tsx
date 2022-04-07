// Dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { AboutUsComponent } from "./components/AboutUsComponent";

// CSS
import "./App.scss";
import { MainPageComponent } from "./components/MainPageComponent";

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
