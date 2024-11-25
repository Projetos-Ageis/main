import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import arrowDown from "../../assets/arrowDown.svg";
import arrowUp from "../../assets/arrowUp.svg";
import ipiranga from "../../assets/ipiranga.svg";
import seta from "../../assets/seta.svg";
import {
  InformationsContainer,
  ModalContainer,
  PricesContainer,
} from "./styles";

export function Modal({ isOpen, onClose, posto }) {
  const [coordinates, setCoordinates] = useState(null); // Começa como null
  const [error, setError] = useState(null); // Controle de erros

  useEffect(() => {
    if (posto?.endereco) {
      // API do OpenCage para geocodificação
      const fetchCoordinates = async () => {
        try {
          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
              posto.endereco
            )}&key=21a7d831eaec4e0aa497c57b227d491b`
          );
          const data = await response.json();
          if (data.results && data.results.length > 0) {
            const { lat, lng } = data.results[0].geometry;
            setCoordinates({ lat, lng });
            setError(null); // Limpa erros, se existirem
          } else {
            setError("Endereço não encontrado.");
          }
        } catch (error) {
          console.error("Erro ao buscar coordenadas:", error);
          setError("Erro ao buscar coordenadas.");
        }
      };
      fetchCoordinates();
    }
  }, [posto?.endereco]);

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
          <InformationsContainer>
            <img src={ipiranga} alt="Bandeira" className="flag" />
            <h1>{posto?.bandeira}</h1>
            <p>{posto?.endereco}</p>
            <p>{posto?.telefone}</p>
            <button
              onClick={() => {
                if (posto?.endereco) {
                  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
                    posto.endereco
                  )}`;
                  window.open(mapsUrl, "_blank");
                } else {
                  alert("Endereço não disponível.");
                }
              }}
            >
              <img
                src={seta}
                alt="Seta indicando para virar a direita"
                className="icon"
              />
              Rotas
            </button>
          </InformationsContainer>
          <div>
            <PricesContainer>
              <div>
                <h2 className="type">
                  Gasolina
                </h2>
                <h2 className="up">
                  <span>R$</span>
                  {posto?.gasolina}
                </h2>
              </div>
              <div>
                <h2 className="type">
                  Etanol
                </h2>
                <h2 className="up">
                  <span>R$</span>
                  {posto?.etanol}
                </h2>
              </div>
              <div>
                <h2 className="type">
                  Diesel
                </h2>
                <h2 className="down">
                  <span>R$</span>
                  {posto?.diesel}
                </h2>
              </div>
            </PricesContainer>
            {coordinates ? (
              <MapContainer
                center={[coordinates.lat, coordinates.lng]}
                zoom={17}
                className="maps"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="© OpenStreetMap contributors"
                />
                <Marker position={[coordinates.lat, coordinates.lng]} />
              </MapContainer>
            ) : error ? (
              <p style={{ color: "red" }}>{error}</p>
            ) : (
              <p>Carregando mapa...</p>
            )}
          </div>
        </div>
      </ModalContainer>
    </div>
  );
}
