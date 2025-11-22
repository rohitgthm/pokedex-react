import React from "react";

const PokemonStats = ({ pokeInfo }) => {
  return (
    <div className="rounded w-full h-full p-3 bg-sky-200/10">
      <h1 className="text-green-300">Stats :</h1>
      <ul className="grid grid-cols-2 gap-2">
        <li className="text-gray-300 text-sm font-medium my-1">
          Hp : {pokeInfo.stats.hp}
        </li>
        <li className="text-gray-300 text-sm font-medium my-1">
          Attack : {pokeInfo.stats.attack}
        </li>
        <li className="text-gray-300 text-sm font-medium my-1">
          Defence : {pokeInfo.stats.defence}
        </li>
        <li className="text-gray-300 text-sm font-medium my-1">
          Speed : {pokeInfo.stats.speed}
        </li>
      </ul>{" "}
    </div>
  );
};

export default PokemonStats;
