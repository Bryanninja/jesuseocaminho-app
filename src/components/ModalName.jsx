import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import WelcomeIcon from '../assets/SVG/WelcomeIcon.svg';
import { ModalTransition } from './Animations';
import Button from './Button';

const ModalName = ({ isOpen, onEnter }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      document.documentElement.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      document.documentElement.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.documentElement.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99] flex items-center justify-center bg-black/60 px-6 backdrop-blur-xl"
        >
          {/* 2. O COMPONENTE DE ANIMAÇÃO ENVOLVENDO O CONTEÚDO */}
          <ModalTransition className="container my-auto flex max-w-md flex-col items-center gap-8 rounded-3xl border border-plan-green-opaque bg-plan-light-black px-10 py-12 shadow-2xl">
            <div className="flex flex-col items-center gap-6">
              <img
                src={WelcomeIcon}
                alt="Ícone de Boas Vindas"
                className="w-40"
              />
              <h1 className="text-center font-raleway text-4xl font-bold text-white">
                Olá, a paz <br className="md:hidden" /> do Senhor!
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
          </ModalTransition>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalName;
