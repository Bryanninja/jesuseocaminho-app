import WelcomeIcon from '../../assets/SVG/WelcomeIcon.svg';
import { UseReading } from '../../context/ReadingContext';
import Card from '../Card';
import Dashboard from '../Dashboard';

const WelcomeCard = ({ name }) => {
  const { completedDays } = UseReading();
  const totalRead = completedDays.length;
  const percentage =
    totalRead === 0
      ? 0
      : totalRead === 365
        ? 100
        : Math.min(99, Math.ceil((totalRead / 365) * 100));

  // função para definir a mensagem dinamicamente
  const getProgressMessage = () => {
    if (totalRead === 0) return 'Vamos começar a sua jornada?';
    if (totalRead === 365) return 'Glória a Deus! Você concluiu a Bíblia!';
    return 'Você está indo muito bem!';
  };

  return (
    <section className="mx-auto -mt-36 flex w-full max-w-[1440px] flex-col gap-6 px-6 md:px-8 lg:flex-row">
      {/* Card 1: Boas-vindas */}
      <Card className="w-full flex-1 gap-6 md:gap-10">
        <img src={WelcomeIcon} alt="" className="w-32 shrink-0 xl:w-44" />

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="font-raleway text-3xl font-bold text-white xl:text-4xl">
            Olá, {name}
          </h2>
          <p className="text-base text-white/80 xl:text-xl">
            A paz do Senhor esteja convosco!
          </p>
        </div>
      </Card>

      {/* Card 2: Dashboard */}
      <Card className="w-full flex-1 gap-10 xl:gap-32">
        <div className="flex h-full w-full flex-1 flex-col items-center justify-center py-2 text-center md:items-start md:text-left">
          <h2 className="font-raleway text-3xl font-bold leading-tight text-white xl:text-3xl">
            Veja o seu <br /> progresso de
            <br className="hidden md:block" /> Leitura
          </h2>
          <p className="mt-2 text-base text-white/80">{getProgressMessage()}</p>
        </div>

        {/* Componente do Círculo */}
        <div className="shrink-0">
          <Dashboard percentage={percentage} />
        </div>
      </Card>
    </section>
  );
};

export default WelcomeCard;
