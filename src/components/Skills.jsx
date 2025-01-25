import React from "react";
import node from "../img/node-logo.png"
import postgres from '../img/postgres.png'
import MongoDb from '../img/Mongodb.png'
import reactImage from '../img/React-icon.png'
import prisma from '../img/logo-white.webp'
import docker from '../img/docker.png'

export default function Skills() {
  return (
    <section id="skills" className="">
      <h2 className="text-9xl text-white text-center mt-10 hover:scale-105 animate-bounce ease-in-out">Skills learned</h2>
      <div  id="all-skills" className="grid grid-cols-2 mt-10 ">
        <div id="first" className="p-4 flex items-center justify-center  flex-col    mb-5">
          <h2 className="text-4xl mb-1.5 text-[#f5f5f5] ">Node.js</h2>
          <img src={node} className="rounded-lg h-16 w-auto m-5 " alt="" />
        </div>
        <div id="second" className="p-4 flex items-center justify-center  flex-col  mb-5">
          <h2 className="text-4xl mb-1.5 text-[#f5f5f5] ">Postgres</h2>
          <img src={postgres} className="rounded-lg h-16 w-auto m-5" alt="" />
        </div>
        <div id="third" className="p-4 flex items-center justify-center  flex-col mb-5">
          <h2 className="text-4xl mb-1.5 text-[#f5f5f5]">Mongo DB</h2>
          <img src={MongoDb} className="rounded-lg h-16 w-auto m-5 " alt="" />
        </div>
        <div id="Fourth" className="p-4 flex items-center justify-center  flex-col mb-5">
          <h2 className="text-4xl mb-1.5 text-[#f5f5f5] ">React</h2>
          <img src={reactImage} className="rounded-lg h-16 w-auto m-5" alt="" />
        </div>
        <div id="fifth" className="p-4 flex items-center justify-center  flex-col mb-5">
          <h2 className="text-4xl mb-1.5 text-[#f5f5f5]">Prisma ORM</h2>
          <img src={prisma} className="rounded-lg h-16 w-auto m-5" alt="" />
        </div>
        <div id="sixth" className="p-4 flex items-center justify-center  flex-col mb-5">
          <h2 className="text-4xl mb-1.5 text-[#f5f5f5]">Docker</h2>
          <img src={docker} className="rounded-lg h-16 w-auto m-5" alt="" />
        </div>
      </div>
    </section>
  );
}
