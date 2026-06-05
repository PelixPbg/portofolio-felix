import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./components/Experience/Experience.jsx";
import Project from "./pages/Project";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </main>
    </>
  );
}

export default App;