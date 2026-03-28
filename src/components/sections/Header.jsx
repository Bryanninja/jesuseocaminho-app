import Logo from '../../assets/SVG/logo.svg';
import { FadeDown } from '../Animations';

const Header = () => {
  return (
    <FadeDown>
      {/* 
  
        1. pt-[env(safe-area-inset-top)] -> Faz o padding começar exatamente onde o notch termina.
        2. valor extra (ex: 20px) para o conteúdo não colar no notch.
      */}
      <header className="flex flex-col items-center justify-center gap-12 bg-hero-gradient pb-60 pt-[calc(env(safe-area-inset-top)+20px)] md:pt-16">
        <img src={Logo} alt="Logo Jesus é o caminho" className="w-40" />
        <h1 className="text-center font-raleway text-5xl font-bold text-white md:text-6xl">
          Plano de
          <br /> Leitura 2026
        </h1>
      </header>
    </FadeDown>
  );
};

export default Header;
