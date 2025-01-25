import React from "react";
import payment from '../img/paymentApp.jpg'
import TODO from '../img/TODO.png'
import Stock from '../img/Stock.jpg'
import Game from '../img/Game.png'
export default function Projects() {
  const projects = [
    { name: "Payment App", description: "Created a full stack Payment app using MERN stack as the Tech. stack. The app allows us to make payments to poeple who are present in our contact list. Used Mongo Db as the No SQL database but also created a similar version of this payment app using Postgres SQL as the SQL database", link: "#", image:payment },
    { name: "Full-Stack TODO App", description: "Created a Full Stack TODO Website that stored all our todos, allowed us to maintain our day to day Schedule. The Tech. stack used in this website was MERN stack, along with type checking with Zod and Intergration of frointend and backend using 'Axiox'. The TODO app can store users data and can be remotely logged in form any device that has the usernname and password credentials for logging in.  ", link: "#", image:TODO },
    { name: "Stock Market Portfolio", description: "Created a Stock Market Portfolio for managing and Displaying the stocks a person is interested in. This is a full stack application that can bve used in live after creating an API that will allow real time values of stocks ", link: "#", image: Stock },
    { name: "Game-Website", description: "Created a frontend of a game website that allows us to buy, search games and filter them according to different Genre. REact was the library used for developing the frontend and used a free API for fetching the games of different kinds. ", link: "#", image: Game },
  ];

  return (
    <section id="projects">
      <h2 className="text-9xl text-white p-6 text-center top-10 hover:scale-105 transition-all animate-bounce ease-in-out">My Projects</h2>
      <div id="all-projects" className="grid grid-cols-2">

      {projects.map((project, index) => (
        <div  className='p-2 flex flex-col items-center justify-center bg-slate-600 hover:shadow-lg shadow-white mt-25 mr-32 ml-32 mb-10 rounded-xl h-auto object-cover hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer ' key={index}>
          <img src={project.image} className="rounded-lg h-45 w-60 hover:scale-105 transition-all ease-in-out duration-300" alt="" />
          <h3 className="text-white font-bold hover:scale-105 transition-all ease-in-out p-2 cursor-pointer">{project.name}</h3>
          <p className="text-white">{project.description}</p>
          <a href={project.link} className="text-white">View Project</a>
        </div>
      ))}
      </div>
    </section>
  );
}
