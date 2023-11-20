import styled from "styled-components";

export const ContainerDetailPage = styled.div`
  height: 100%;
  background-color: #5d5d5d;
  margin-bottom: 11.25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const TitleDetails = styled.h2`
  margin-right: 77%;
  padding: 1.25rem;
  margin-top: 2%;
  margin-bottom: 2%;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 4.5rem;
  color: #ffffff;
`;

export const CardDetails = styled.div`
  width: 94%;
  padding: 1rem;
  color: white;
  font-family: Inter;
  border-radius: 0.625rem;

  position: relative;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
  }

  .idPokemon {
    width: 1.875rem;
    height: 1.1875rem;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #ffffff;

    position: absolute;
    left: 43.125rem;
    top: 1.5rem;
  }

  .name {
    width: 14.875rem;
    height: 3.625rem;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.625rem;
    color: #ffffff;
    text-transform: capitalize;
    margin-top: 0.3125rem;

    position: absolute;
    left: 43.125rem;
    top: 2.4375rem;
  }

  .imgPokemon {
    width: 13.75rem;
    height: 13.75rem;

    position: absolute;
    left: 80%;
    top: -6.5625rem;
    z-index: 1;
  }
`;

export const BoxPokemon = styled.div`
  width: 13.4375rem;
  height: 13.4375rem;
  margin: 16px;
  background: #ffffff;
  border-radius: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 40%;
    height: 40%;
  }
`;

export const ContainerBaseStats = styled.div`
  width: 21.25rem;
  height: 28.875rem;
  margin: 16px;
  padding: 19.2px;

  background: #ffffff;
  border-radius: 0.5rem;

  hr {
    margin: 0.5rem;
    border-color: rgba(250, 250, 250);
    opacity: 0.2;
  }
`;

export const TitleBaseStats = styled.h2`
  margin-bottom: 0.5rem;
  color: #000000;
  font-family: "Inter";
  font-weight: 700;
`;

export const BaseStats = styled.div`
  color: black;
  font-weight: 300;
  text-align: center;

  flex-direction: row !important;
  align-items: center;
  justify-content: center;

  span {
    width: 3.125rem;
    margin-left: 1rem;
    font-size: 0.8rem;
  }

  .stats {
    font-weight: bold;
    margin-left: 0.3rem;
  }

  .special {
    background-color: #ffde69;
  }

  .total {
    color: black;
    display: flex;
    flex-direction: row;
    margin-right: 11.8rem;
  }
`;

export const BarPokemon = styled.div`
  width: 11.875rem;
  height: fit-content;
  margin-left: 0.3rem;
  background-color: white;

  display: flex;
`;

export const Progress = styled.div`
  width: ${(props) => props.width}%;
  height: 0.625rem;

  border-radius: 0.125rem;
  background-color: #ff7c2e;
`;

export const PokemonTypeContainer = styled.div`
  width: 6.1875rem;
  height: 1.9375rem;

  position: absolute;
  left: 43.125rem;
  top: 6.6875rem;

  div {
    display: flex;
    flex-direction: row;
  }

  .imgTypePokemon {
    max-width: 6.25rem;
    height: 2rem;
    margin-right: 0.5rem;
  }
`;

export const ContainerMoves = styled.div`
  width: 18.25rem;
  background: #ffffff;
  border-radius: 0.5rem;

  margin: 1rem;
  margin-top: 9rem;
  margin-left: 3.2rem;

  h2 {
    margin-left: 1.2rem;
    margin-top: 1rem;

    color: #000000;
    font-family: "Inter";
    font-weight: 700;
  }

  div {
    margin-top: 0.5rem;
    margin-left: 1rem;
  }
`;

export const TypeItemPokemon = styled.li`
  width: fit-content;
  height: 2.3125rem;
  padding: 0.625rem;
  margin: 0.3125rem;
  border: 0.0625rem dashed rgba(0, 0, 0, 0.14);
  border-radius: 0.75rem;
  background: #ececec;
  font-family: "Poppins", sans-serif;
  list-style: none;
  font-weight: 400;
  font-size: 0.875rem;
  color: black;
  display: flex;
  align-items: center;
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

export const LogoPokemon = styled.img`
  width: 46.875rem;
  height: 45rem;

  position: absolute;
  top: -6.0625rem;
  right: -7.1875rem;
`;