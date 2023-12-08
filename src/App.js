import { React, useState, useEffect } from "react";
import axios from "axios";
import { GlobalContext } from "./contexts/GlobalContext";
import Router from "../src/Router/Router";
import { GlobalStyle } from "./GlobalStyles";
import ModalPokemon from "../src/components/Modal/Modal";

function App() {
  const [pokesList, setPokesList] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
      .then((res) => {
        setPokesList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addPokemonToPokedex = (pokemon) => {
    const pokedexCopy = pokedex

    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemon.name
    );

    if (!isAlreadyOnPokedex) {
      pokedexCopy.push(pokemon)
      setPokedex(pokedexCopy);
    }
    // console.log(pokedex)
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.id !== Number(pokemonToRemove)
    );

    console.log(newPokedex, "copy")
    setPokedex(newPokedex);
  };
  
  const context = {
    pokesList,
    setPokesList,
    getPokemons,
    pokedex,
    setPokedex,
    addPokemonToPokedex,
    removeFromPokedex,
    pokemonDetails,
    setPokemonDetails

  };

  return (
    <>
      <GlobalContext.Provider value={context}>
        <ModalPokemon/>
        <Router />
        <GlobalStyle />
      </GlobalContext.Provider>
    </>
  );
}

export default App;