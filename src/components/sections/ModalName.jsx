import { useEffect, useState } from 'react';

import WelcomeIcon from '../../assets/SVG/WelcomeIcon.svg';
import Button from '../Button';

const ModalName = ({ isOpen, onEnter }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSaveName = () => {
    if (userName.trim().length > 2) {
      const firstName = userName.trim().split(' ')[0];

      localStorage.setItem('user-name', firstName);
      onEnter();
    } else {
      alert('Por favor, digite um nome válido.');
    }
  };

  return (
    <div className="fixed inset-0 z-[99] flex h-dvh w-full items-center justify-center px-6 backdrop-blur-xl">
      <div className="container flex max-w-md flex-col items-center gap-8 rounded-3xl border border-plan-green-opaque bg-plan-light-black px-10 py-12">
        <div className="flex flex-col items-center gap-6">
          <img src={WelcomeIcon} alt="" className="w-40" />
          <h1 className="font-raleway text-4xl font-bold text-white">
            Olá, a paz <br className="md:hidden" /> do senhor!
          </h1>
        </div>

        <div className="flex w-full flex-col gap-3">
          <input
            type="text"
            className="w-full rounded-xl border border-plan-green-opaque bg-plan-black-text px-4 py-4 text-white placeholder:text-plan-green-opaque focus-within:outline-plan-green-brand"
            placeholder="Digite o seu primeiro nome.."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Button size="lg" className="w-full" onClick={handleSaveName}>
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalName;
