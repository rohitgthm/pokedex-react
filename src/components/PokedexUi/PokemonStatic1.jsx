import React from "react";

const PokemonStatic1 = () => {
  return (
    <div className="flex justify-around items-center mt-2">
      <div className="w-10 h-10 mt-2 ml-5 shadow-black shadow-2xs  rounded-full border-2 border-black bg-zinc-600"></div>
      <div className="flex gap-5">
        <div className="border-b border-2 bg-red-600 outline-none rounded-2xl  border-black w-12 h-2"></div>
        <div className="border-b  border-2 bg-green-500 outline-none rounded-2xl border-black w-12 h-2"></div>
      </div>
    </div>
  );
};

export default PokemonStatic1;
