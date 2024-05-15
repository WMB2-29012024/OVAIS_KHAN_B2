import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Pages/home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";
import Course from "./Pages/Course";
import NotFound from "./Pages/NotFound";
import "./App.css";

function App() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/About");
  //   }, 3000);
  // }, []);

  return (
    
    <div className="App">
      <div className="container">
        <h1>Logo</h1>
        <div>
          <Link to="/About">
            <button>Go to About page</button>
          </Link>
          <Link to="/Contact">
            <button>Go to Contact</button>
          </Link>
          <Link to="/Course">
            <button>Go to Course</button>
          </Link>
          <button onClick={() => navigate("/project",{state: 12345})}>
            Go to Project page
          </button>
          <Link to="/Home">Go to Home page</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Course/:coursename" element={<Course />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     
    </div>
  );
}

export default App;
