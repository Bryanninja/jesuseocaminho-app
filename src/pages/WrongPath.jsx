import { Link } from 'react-router-dom';

import Logo from '../assets/SVG/logo.svg';
import Button from '../components/Button';

const WrongPath = () => {
  return (
    <main className="flex h-dvh flex-col items-center justify-center gap-10 p-8">
      <img src={Logo} alt="Logo Igreja Jesus é o Caminho" className="w-40" />

      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="font-raleway text-5xl font-bold leading-tight text-white">
          Página não <br /> encontrada
        </h1>

        <p className="text-base text-white/80">
          Parece que você se perdeu. <br /> Volte à página Inicial!
        </p>
      </div>

      <Button to="/">Voltar para o Início</Button>
    </main>
  );
};

export default WrongPath;
