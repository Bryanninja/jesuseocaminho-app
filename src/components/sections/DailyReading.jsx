import Button from '../Button';
import Checkbox from '../Checkbox';
import Reading from '../Reading';

const DailyReading = () => {
  return (
    <section className="container mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-12 md:px-8">
      {/* Title */}
      <div className="text-center text-white">
        <h1 className="font-raleway text-3xl font-bold">
          Acompanhar a <br className="md:hidden" /> Leitura de hoje
        </h1>
        <p className="text-base">Marque o círculo para concluir.</p>
      </div>

      {/* Reading */}
      <Reading />

      {/* Button */}
      <Button to="/plan" color="outline" size="lg" className="self-center">
        Ver Leitura completa
      </Button>
    </section>
  );
};

export default DailyReading;
