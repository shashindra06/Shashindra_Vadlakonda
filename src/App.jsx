import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans bg-white text-gray-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App; 