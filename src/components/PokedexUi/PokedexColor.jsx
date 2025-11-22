import React from "react";

const PokedexColor = () => {
  return (
    <div className="flex gap-2">
      <div className="w-15 h-15 ml-2 border-4 outline-2 outline-black rounded-full bg-sky-400"></div>
      <div className="w-5 h-5 mt-1 rounded-full border-2 border-black bg-red-700"></div>
      <div className="w-5 h-5 mt-1 rounded-full border-2 border-black bg-yellow-300"></div>
      <div className="w-5 h-5 mt-1 rounded-full border-2 border-black bg-green-500"></div>
    </div>
  );
};

export default PokedexColor;
