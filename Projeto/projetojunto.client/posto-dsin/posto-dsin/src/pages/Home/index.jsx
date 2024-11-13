import { useState } from 'react';
import { Modal } from '../../components/Modal';
import { HeaderComp } from '../../components/Header';
import { HomeContainer } from './styles';
import { Block } from '../../components/Block';

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
    console.log(isModalOpen)
  const handleBlockClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
