import { Github, Linkedin } from "lucide-react";
import React from "react";

const Description = () => {
  return (
    <div className="w-full h-full font-mono">
      <div>
        <h1 className="text-4xl  font-semibold text-zinc-700">Pokédex</h1>
        <p className="text-xl  font-medium text-gray-700 pt-2">
          Explore Pokémon with Real-Time Data.
        </p>
      </div>
      <div className="h-px bg-slate-400 my-5"></div>
      <div>
        <p className="text-[20px] text-zinc-600">
          This application displays detailed information about Pokémon using the
          official Pokémon API. Each entry includes the Pokémon’s image, name,
          type, stats, height, and weight. The interface is built with React for
          component-based structure and Tailwind CSS for responsive styling.
          JavaScript handles data fetching and state management, ensuring smooth
          interaction and accurate data retriev.
        </p>
        <div className="h-px bg-slate-400 my-5"></div>
        <div>
          <h2 className="text-3xl text-zinc-700 font-semibold">Tech stack</h2>
          <ul className="m-2 text-xl font-medium">
            <li className="py-1">JavaScript</li>
            <li className="py-1">React js</li>
            <li className="py-1">Tailwind CSS</li>
            <li className="py-1">
              {" "}
              <a
                className="hover:text-blue-500 hover:underline hover:font-semibold"
                href="./https://pokeapi.co/"
              >
                Pokemon API
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-px bg-slate-400 my-5"></div>
      <div className="flex justify-between items-end p-2">
        <h2 className="text-xl text-zinc-800 font-semibold">Made By : Rohit</h2>{" "}
        <div className="flex gap-5 ">
          <a
            href="https://github.com/rohitgthm/pokedex-react"
            className="hover:text-blue-800/50 transition-all"
            target="_blank"
            aria-label="github repo for this project"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-kumar-413a67357/"
            target="_blank"
            className="hover:text-blue-500 transition-all"
            aria-label="linkedin post for this project"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Description;
