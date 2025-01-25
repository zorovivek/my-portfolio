import React from "react";
import logo from "../img/top-pic.avif"
export default function AboutMe() {
  return (
    <section id="about-me" className="  ">
      <h2 className=" text-9xl hover:ease-in-out scale-105 animate-pulse cursor-pointer px-16 relative top-50 left-16 text-white">About Me</h2>
      <div className="flex justify-between items-center text-center">
      <p className="relative  text-center text-white p-2.5">Hi! I'm Vivek Chaudhary, a Web Developer by profession and interest. I am a full Stack web dev Engineer currently in the final year of My Bachelor's degree in Computer Science and Engineering. I Belong from Haldwani, Uttarakhand and am currently based in Dehradun. I am thoroughly dedicated towards development of websites and enjoy working on projects. </p>
      <img src={logo} alt="" className=" h-140 w-auto hover:scale-102 transition-all ease-in-out duration-300 pr-14 pb-15 bg-transparent cursor-pointer" />
      </div>
    </section>
  );
}
