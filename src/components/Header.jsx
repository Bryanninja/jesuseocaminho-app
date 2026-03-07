import Logo from '../assets/SVG/logo.svg';

const Header = () => {
  return (
    <header className="bg-hero-gradient flex flex-col items-center justify-center gap-12 pb-60 pt-20 md:pt-16">
      <img src={Logo} alt="Logo Jesus é o caminho" className="w-40" />
      <h1 className="text-center font-raleway text-5xl font-bold text-white md:text-6xl">
        Plano de
        <br /> Leitura 2026
      </h1>
    </header>
  );
};

export default Header;
