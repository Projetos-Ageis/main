import { useEffect, useState } from 'react';
import { Modal } from '../../components/Modal';
import { HeaderComp } from '../../components/Header';
import { HomeContainer } from './styles';
import { Block } from '../../components/Block';
import { GetOdata } from './actions';

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginResponse, setLoginResponse] = useState(null);
  
  const handleBlockClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const login = async () => {
      const email = "paulofusco@gmail.com";
      const senha = "paulo123";
      
      try {
        const response = await GetOdata(email, senha);
        setLoginResponse(response);

        if (response.token) { // Supondo que o token venha em response.token
          localStorage.setItem("authToken", response.token); // Armazena o token no localStorage
          console.log("Token armazenado com sucesso:", response.token);
        } else {
          console.log("Token não encontrado na resposta");
        }
      } catch (error) {
        console.error("Erro ao tentar logar:", error);
      }
    };

    login();
  }, []);
  return (
    <HomeContainer>
      <HeaderComp />
      <div className="blocks">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <Block key={index} onClick={handleBlockClick} />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </HomeContainer>
  );
}
