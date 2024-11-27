import { useEffect, useState } from 'react';
import { Modal } from '../../components/Modal';
import { HeaderComp } from '../../components/Header';
import { HomeContainer, Loader } from './styles';
import { Block } from '../../components/Block';
import { GetOdata, GetPosto } from './actions';

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userResponse, setUserResponse] = useState(null);
  const [selectedPosto, setSelectedPosto] = useState(null);
  const [postoResponse, setPostoResponse] = useState(null);
  const [loading, setLoading] = useState(true); 

  const handleBlockClick = (posto) => {
    setSelectedPosto(posto);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPosto(null);
    window.location.reload();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [userData, postoData] = await Promise.all([GetOdata(), GetPosto()]);
        setUserResponse(userData);
        setPostoResponse(postoData);
        console.log("Usuário:", userData);
        console.log("Postos:", postoData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <HomeContainer>
      <HeaderComp />
      {loading ? (
        <Loader />
      ) : (
        <div className="blocks">
          {postoResponse?.map((posto, index) => (
            <Block information={posto} key={index} onClick={() => handleBlockClick(posto)} />
          ))}
        </div>
      )}
      <Modal isOpen={isModalOpen} onClose={closeModal} posto={selectedPosto} />
    </HomeContainer>
  );
}

