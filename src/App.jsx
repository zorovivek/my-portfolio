import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-800">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}
