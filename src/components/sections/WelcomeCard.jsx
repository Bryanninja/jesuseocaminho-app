import WelcomeIcon from '../../assets/SVG/WelcomeIcon.svg';
import Card from '../Card';
import Dashboard from '../Dashboard';

const WelcomeCard = ({ name }) => {
  return (
    <section className="mx-auto -mt-36 flex w-full max-w-[1440px] flex-col gap-6 px-6 md:px-8 lg:flex-row">
      {/* Card 1: Boas-vindas */}
      <Card className="gap-6 md:gap-10">
        <img src={WelcomeIcon} alt="" className="w-32 xl:w-44" />
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h2 className="font-raleway text-3xl font-bold text-white xl:text-4xl">
            Olá, {name}
          </h2>
          <p className="text-base text-white/80 xl:text-xl">
            A paz do Senhor esteja convosco!
          </p>
        </div>
      </Card>

      {/* Card 2: Dashboard */}
      <Card className="gap-10 xl:gap-32">
        <div className="flex h-full flex-col items-center justify-center py-2 text-center md:items-start md:text-left">
          <h2 className="font-raleway text-3xl font-bold leading-tight text-white xl:text-3xl">
            Veja o seu <br /> progresso de
            <br className="hidden md:block" /> Leitura
          </h2>
          <p className="mt-2 text-base text-white/80">
            Você está indo muito bem!
          </p>
        </div>

        {/* Componente do Círculo */}
        <div className="shrink-0">
          <Dashboard />
        </div>
      </Card>
    </section>
  );
};

export default WelcomeCard;
