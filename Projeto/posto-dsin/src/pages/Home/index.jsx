import { useEffect, useState } from 'react';
import { Modal } from '../../components/Modal';
import { HeaderComp } from '../../components/Header';
import { HomeContainer } from './styles';
import { Block } from '../../components/Block';
import { GetOdata,GetPosto } from './actions';

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userResponse, setUserResponse] = useState(null);
  const [selectedPosto, setSelectedPosto] = useState(null);
  const [postoResponse, setPostoResponse] = useState(null);
  
  const handleBlockClick = (posto) => {
    setSelectedPosto(posto);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPosto(null);
  };

  useEffect(() => {
    const information = async () => {
      
      try {
        const response = await GetOdata();
        setUserResponse(response);
        console.log(response)
      } catch (error) {
        console.error("Erro buscar informação usuario:", error);
      }
    };
    const informationPostos = async () => {
      
      try {
        const response = await GetPosto();
        setPostoResponse(response);
        console.log(response)
      } catch (error) {
        console.error("Erro buscar informação posto:", error);
      }
    };

    information();
    informationPostos();
  }, []);
  return (
    <HomeContainer>
      <HeaderComp />
      <div className="blocks">
        {postoResponse?.map((posto, index) => (
          <Block information={posto} key={index} onClick={() => handleBlockClick(posto)} />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} posto={selectedPosto}/>
    </HomeContainer>
  );
}
