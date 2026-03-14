import { useState } from 'react';

import DailyReading from '../components/sections/DailyReading';
import Header from '../components/sections/Header';
import ModalName from '../components/sections/ModalName';
import WelcomeCard from '../components/sections/WelcomeCard';

const Home = () => {
  // O estado já nasce sabendo se deve aparecer ou não
  const [showModal, setShowModal] = useState(
    () => !localStorage.getItem('user-name'),
  );

  // Criamos um estado para o nome também (Lazy Initialization)
  const [userName, setUserName] = useState(
    () => localStorage.getItem('user-name') || '',
  );

  // Função que o Modal vai chamar quando o nome for salvo
  const handleUserEntered = () => {
    const savedName = localStorage.getItem('user-name');
    setUserName(savedName);
    setShowModal(false);
  };

  return (
    <main className="relative">
      <ModalName isOpen={showModal} onEnter={handleUserEntered} />
      <Header />
      <WelcomeCard name={userName} />
      <DailyReading />
    </main>
  );
};

export default Home;
