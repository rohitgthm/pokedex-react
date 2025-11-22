import axios from "axios";
import { useEffect, useState } from "react";
import PokemonPng from "./pokedexComponent/PokemonPng";
import PokedexColor from "./PokedexUi/PokedexColor";
import PokemonDemographicData from "./pokedexComponent/PokemonDemographicData";
import PokemonStats from "./pokedexComponent/PokemonStats";
import Button from "./pokedexComponent/Button";
import { pokemonObject } from "./pokemonInfoObj";
import PokedexStatic from "./PokedexUi/PokedexStatic";
import PokemonStatic1 from "./PokedexUi/PokemonStatic1";

const PokeDex = () => {
  const [pokeInfo, setPokeInfo] = useState(pokemonObject);

  const [randomId, setRandomId] = useState(1);

  const API = `https://pokeapi.co/api/v2/pokemon/${randomId}/`;

  const getPokeMonInfo = async () => {
    try {
      const res = await axios.get(API);
      let pokemon = res.data;
      setPokeInfo({
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        type: pokemon?.types[0]?.type.name,
        type1: pokemon?.types[1]?.type.name,
        height: pokemon.height,
        weight: pokemon.weight,
        stats: {
          hp: pokemon.stats[0].base_stat,
          attack: pokemon.stats[1].base_stat,
          defence: pokemon.stats[2].base_stat,
          speed: pokemon.stats[5].base_stat,
        },
      });
    } catch (error) {
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    if (randomId) {
      getPokeMonInfo();
    }
  }, [randomId]);

  const genRandomId = () => {
    let radomNumber = Math.floor(Math.random() * 151) + 1;
    setRandomId(radomNumber);
  };

  return (
    <div className="w-full max-h-screen flex justify-center items-center mt-20 text-white">
      {/* pokedex border start here */}

      <div className="w-90 h-auto border-4 border-black bg-red-800 p-2 rounded-2xl shadow-lg shadow-sky-300">
        <PokedexColor />
        <div className="border-b my-3.5 border-2 border-black w-full"></div>

        {/* pokedex display starts here */}

        <div className="w-80 h-90 p-2 ml-2 mr-2 rounded bg-slate-200 border-2 border-black font-mono">
          {/* pokedex inner display */}

          <div className="w-70 ml-2 mr-2 p-2 rounded h-70 bg-zinc-800 flex flex-col gap-3 justify-baseline items-start">
            <div className="w-full h-full flex gap-2">
              <PokemonPng pokeInfo={pokeInfo} />
              <PokemonDemographicData pokeInfo={pokeInfo} />
            </div>
            <PokemonStats pokeInfo={pokeInfo} />
          </div>
          <PokedexStatic />
        </div>
        <PokemonStatic1 />
        <Button genRandomId={genRandomId} />
      </div>
    </div>
  );
};

export default PokeDex;
