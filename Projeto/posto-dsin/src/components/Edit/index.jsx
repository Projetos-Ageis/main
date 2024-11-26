import "leaflet/dist/leaflet.css";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { ModalContainer } from "./styles";

export function ModalEdit({ isOpen, onClose, posto }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: "1000",
      }}
    >
      <ModalContainer>
        <button className="buttonBack" onClick={onClose}>
          <IoMdArrowBack />
          <p>Voltar</p>
        </button>
        <div className="container">
          <h1>Editar Preços</h1>
          <div className="conteudo">
            <form action="">
              <div>
                <p>Etanol</p>
                <input type="number" />
              </div>
              <div>
                <p>Gasolina</p>
                <input type="number" />
              </div>

              <div>
                <p>Diesel</p>
                <input type="number" />
              </div>

              <div>
                <button>Salvar</button>
              </div>
            </form>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
}
