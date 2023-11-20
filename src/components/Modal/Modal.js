import React from "react";
import { Container, Modal } from "../Modal/ModalStyle";

function ModalPokemon() {
  const closeModal = (event) => {
    if(event.currentTarget.id === event.target.id) {
      document.body.style.overflow = "initial";
      const modal = document.getElementById("modal")
      modal.style.display = "none";
    }
  }
  return (
    <>
      <Container id="modal" onClick={closeModal} >
        <Modal>
          <h2 className="modalTitle">Gotcha!</h2>
          <p className="modalDescription">O Pokémon foi adicionado à sua Pokédex com sucesso!</p>
        </Modal>
      </Container >
    </>
  );
}
export default ModalPokemon;

