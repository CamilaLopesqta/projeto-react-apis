import styled from "styled-components";

export const ContainerPokedex = styled.div`
  height: 100%;
  padding: 1.25rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-gap: 0.625rem;
  justify-content: center;
  justify-items: center;
`;

export const BoxTitlePokedex = styled.div`
  width: 100%;
  padding: 2.1875rem;
  margin-top: 1%;
  grid-row: 1;
  grid-column: 1/4;
`;

export const TitlePokedex = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 3rem;
  line-height: 4.5rem;
  color: #ffffff;
`;