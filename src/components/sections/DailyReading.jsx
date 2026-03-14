import { useMemo } from 'react';

import { UseReading } from '../../context/ReadingContext';
import { JsonReading } from '../../reading_plan';
import Button from '../Button';
import Reading from '../Reading';

const DailyReading = () => {
  const todayItem = useMemo(() => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const monthsShort = [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ];

    const todayStr = `${day}/${monthsShort[now.getMonth()]}`;

    return JsonReading.find((item) => item.data === todayStr);
  }, []);

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
      {todayItem ? (
        <Reading
          id={todayItem.id}
          data={todayItem.data}
          chapters={todayItem.chapters}
          isToday={false}
        />
      ) : (
        <p className="text-center text-white/50">
          Erro ao Buscar leitura de hoje. Reinicie e tente novamente.
        </p>
      )}

      {/* Button */}
      <Button to="/plan" color="outline" size="lg" className="self-center">
        Ver Leitura completa
      </Button>
    </section>
  );
};

export default DailyReading;
