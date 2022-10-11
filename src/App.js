import React from "react";
import "./index.css";
import Home from "./routers/Home";
import Contact from "./routers/Contact";
import About from "./routers/About";
import Project from "./routers/Project";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;