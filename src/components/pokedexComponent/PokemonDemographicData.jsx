import React from "react";

const PokemonDemographicData = ({ pokeInfo }) => {
  return (
    <div className="w-full h-full  px-1 flex flex-col justify-baseline items-baseline">
      <h2 className="text-green-300">{pokeInfo.name.toLocaleUpperCase()}</h2>
      <span className="text-gray-300 text-sm font-medium my-0.5">
        {" "}
        Type 1 : {pokeInfo.type}
      </span>
      <span className="text-gray-300 text-sm font-medium my-0.5">
        {" "}
        Type 2 : {!pokeInfo.type1 ? "n/a" : `${pokeInfo.type1}`}
      </span>
      <span className="text-gray-300 text-sm font-medium my-0.5">
        Height : {pokeInfo.height * 10}cm{" "}
      </span>
      <span className="text-gray-300 text-sm font-medium my-0.5">
        Weight : {pokeInfo.weight * 0.1}kg
      </span>
    </div>
  );
};

export default PokemonDemographicData;
