import React from "react";
import Header from "../../components/Header/Header";
import PokemonListPage from "../PokemonListPage/PokemonListPage";
import HomeStyle, { HomeContainer } from "../Home/HomeStyle";

function HomePage() {
  return (
    <HomeContainer>
    <Header />
    <PokemonListPage/>
    </HomeContainer>
  )
}

export default HomePage;