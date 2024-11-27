import { useEffect, useState } from "react";
import { HeaderContainer, MyPostosContainer } from "./styles";
import {Loader} from '../Home/styles'
import { Block } from "../../components/Block";
import { IoMdArrowBack } from "react-icons/io";
import { ModalEdit } from "../../components/Edit";
import { GetPosto } from "./actions";

export function MyPostos() {
  const [postoResponse, setPostoResponse] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosto, setSelectedPosto] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleBlockClick = (posto) => {
    setSelectedPosto(posto);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPosto(null);
  };

  const updatePosto = (updatedPosto) => {
    setPostoResponse((prevPostos) =>
      prevPostos.map((posto) =>
        posto.postoId === updatedPosto.postoId ? updatedPosto : posto
      )
    );
  };

  useEffect(() => {
    const informationPostos = async () => {
      try {
        setLoading(true);
        const response = await GetPosto();
        setPostoResponse(response);
        console.log(response);
      } catch (error) {
        console.error("Erro buscar informação posto:", error);
      } finally {
        setLoading(false);
      }
    };
    informationPostos();
  }, []);

  return (
    <MyPostosContainer>
      <HeaderContainer>
        <h1>Meus Postos</h1>
        <a href="/home" className="buttonBack">
          <IoMdArrowBack className="icon" />
          <p>Voltar</p>
        </a>
        <a href="/profile" className="newPosto">
          <p>Novo Posto</p>
        </a>
      </HeaderContainer>
      {loading ? ( 
        <Loader />
      ) : (
        <div className="blocks">
          {postoResponse?.map((posto, index) => (
            <Block
              information={posto}
              key={index}
              onClick={() => handleBlockClick(posto)}
            />
          ))}
        </div>
      )}
      <ModalEdit
        isOpen={isModalOpen}
        onClose={closeModal}
        posto={selectedPosto}
        onUpdate={updatePosto}
      />
    </MyPostosContainer>
  );
}
