import "leaflet/dist/leaflet.css";
import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { ModalContainer } from "./styles";
import { PutPosto } from "./actions";
import { toast } from 'react-toastify'; 

export function ModalEdit({ isOpen, onClose, posto, onUpdate }) {
  if (!isOpen) return null;

  const [etanol, setEtanol] = useState(posto?.etanol || "");
  const [gasolina, setGasolina] = useState(posto?.gasolina || "");
  const [diesel, setDiesel] = useState(posto?.diesel || "");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedPosto = {
      postoId: posto.postoId,
      nomePosto: posto.nomePosto,
      etanol: parseFloat(etanol),
      gasolina: parseFloat(gasolina),
      diesel: parseFloat(diesel),
    };

    try {
      await PutPosto(
        posto.postoId,
        updatedPosto.diesel,
        updatedPosto.etanol,
        updatedPosto.gasolina,
      );
      toast.success("Preços novos salvo com sucesso!");

      if (onUpdate) {
        onUpdate(updatedPosto);
      }

      onClose();
    } catch (error) {
      toast.error("Erro ao salvar os preços. Verifique os dados e tente novamente.");
    }
  };

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
            <form onSubmit={handleSubmit}>
              <div>
                <p>Etanol</p>
                <input
                  type="number"
                  value={etanol}
                  onChange={(e) => setEtanol(e.target.value)}
                />
              </div>
              <div>
                <p>Gasolina</p>
                <input
                  type="number"
                  value={gasolina}
                  onChange={(e) => setGasolina(e.target.value)}
                />
              </div>

              <div>
                <p>Diesel</p>
                <input
                  type="number"
                  value={diesel}
                  onChange={(e) => setDiesel(e.target.value)}
                />
              </div>

              <div>
                <button type="submit">Salvar</button>
              </div>
            </form>
          </div>
        </div>
      </ModalContainer>
    </div>
  );
}
