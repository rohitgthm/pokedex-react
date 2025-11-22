import React from "react";

const PokemonPng = ({ pokeInfo }) => {
  return (
    <div className="w-[70%] h-[full] bg-sky-200/10 rounded px-1 flex justify-center items-center">
      {pokeInfo.image ? (
        <img src={pokeInfo.image} alt="pokemon-image" className="w-25 h-25" />
      ) : null}
    </div>
  );
};

export default PokemonPng;
