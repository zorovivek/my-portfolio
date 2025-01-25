import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex justify-around text-white text-lg">
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#skills">My Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
}
