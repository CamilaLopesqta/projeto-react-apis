import { React, useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Container, BoxTitle, Title  } from "./PokemonListPageStyle";
import PokemonCard from "../../components/PokemonCard/PokemonCard";


function PokemonListPage() {
  const context = useContext(GlobalContext);
  const { pokemonsList } = context;

  return (
    <Container>
      <BoxTitle>
        <Title>Todos os Pokémons</Title>
      </BoxTitle>
      {pokemonsList
      .map((pokemon) => {
        return <PokemonCard key={pokemon.name} url={pokemon.url} />;
      })}
    </Container>
  );
}

export default PokemonListPage;