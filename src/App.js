import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Nav from "./Nav";
import Contact from "./Contact";
import Footing from "./Footing";
import Skill from "./Skill";
import Education from "./Education";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Footing />
    </>
  );
}

export default App;
