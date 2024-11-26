import { useEffect, useState } from "react";
import { HeaderContainer, MyPostosContainer } from "./styles";
import { Block } from "../../components/Block";
import { IoMdArrowBack } from "react-icons/io";
import { ModalEdit } from "../../components/Edit";

export function MyPostos() {
  const [postoResponse, setPostoResponse] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosto, setSelectedPosto] = useState(null);

  const handleBlockClick = (posto) => {
    setSelectedPosto(posto);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPosto(null);
  };

  useEffect(() => {
    // Simula a resposta de uma API
    const fakePostos = [
      { id: 1, name: "Posto A", location: "Rua A, 123", status: "Ativo" },
      { id: 2, name: "Posto B", location: "Rua B, 456", status: "Inativo" },
      { id: 3, name: "Posto C", location: "Rua C, 789", status: "Ativo" },
      { id: 1, name: "Posto A", location: "Rua A, 123", status: "Ativo" },
      { id: 2, name: "Posto B", location: "Rua B, 456", status: "Inativo" },
      { id: 3, name: "Posto C", location: "Rua C, 789", status: "Ativo" },
      { id: 1, name: "Posto A", location: "Rua A, 123", status: "Ativo" },
      { id: 2, name: "Posto B", location: "Rua B, 456", status: "Inativo" },
      { id: 3, name: "Posto C", location: "Rua C, 789", status: "Ativo" },
    ];

    // Simulando a resposta da API
    setPostoResponse(fakePostos);
  }, []);

  return (
    <MyPostosContainer>
      <HeaderContainer>
        <h1>Meus Postos</h1>
        <button className="buttonBack">
            <IoMdArrowBack className="icon"/>
            <p>Voltar</p>
        </button>
        <button className="newPosto">
            <p>Novo Posto</p>
        </button>
      </HeaderContainer>
      <div className="blocks">
        {postoResponse?.map((posto, index) => (
          <Block information={posto} key={index} onClick={() => handleBlockClick(posto)}/>
        ))}
      </div>
      
      <ModalEdit isOpen={isModalOpen} onClose={closeModal} posto={selectedPosto}/>
    </MyPostosContainer>
  );
}
