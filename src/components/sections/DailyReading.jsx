import { useMemo } from 'react';

import { JsonReading } from '../../reading_plan';
import { FadeUp } from '../Animations';
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
    <FadeUp delay={0.5}>
      <section className="container mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 pb-12 pt-12 md:px-8 md:pt-24">
        {/* Title */}
        <div className="text-center">
          <h1 className="pb-1 font-raleway text-4xl font-bold text-white">
            Acompanhar a <br className="md:hidden" /> Leitura de hoje
          </h1>
          <p className="text-base text-white/80 md:text-xl">
            Marque o círculo para concluir.
          </p>
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
    </FadeUp>
  );
};

export default DailyReading;
