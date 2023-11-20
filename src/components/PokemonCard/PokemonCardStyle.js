import styled from "styled-components";

export const Card = styled.div`
  width: 25.625rem;
  height: 11.875rem;
  margin-bottom: 3rem;
  border-radius: 0.625rem;
  color: white;
  font-family: Inter;

  position: relative;
  display: flex;
  

  .imgPokemon {
    width: 10rem;
    height: 11.5625rem;

    position: absolute;
    top: -3.5625rem;
    left: 14.6875rem;
    z-index: 1;
  }

  .logoPokemonCard {
    width: 18.75rem;
    height: 16.25rem;

    position: absolute;
    top: -3.875rem;
    right: -3.375rem;
  }
`;

export const Container = styled.div`
  padding: 1.25rem;

  .idPokemon {
    width: 1.875rem;
    height: 1.1875rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
  }

  .name {
    width: 9.9375rem;
    height: 2.4375rem;
    font-family: "Inter";
    font-weight: 700;
    font-size: 1.5625rem;
    color: #ffffff;
    text-transform: capitalize;
  }
`;

export const PokemonTypeContainer = styled.div`
  .imgTypePokemon {
    max-width: 6.25rem;
    height: 2rem;
    margin-right: 0.5rem;
  }
`;

export const BoxButtons = styled.div`
  width: 24.6875rem;
  height: 2.375rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  z-index: 3;
  position: absolute;
  left: 0.625rem;
  top: 8.75rem;
`;

export const Pokebola = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.625rem;
  overflow: hidden;

  position: absolute;
  left: 0;
  top: 0;
`;