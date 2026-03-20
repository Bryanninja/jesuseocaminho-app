import React, { useMemo } from 'react';

import { ChevronDown } from 'lucide-react';

import { JsonReading } from '../../reading_plan';
// 1. Importe o novo envelope de animação
import { Collapse, FadeUp } from '../Animations';
import Reading from '../Reading';

const MonthToggle = React.memo(({ month, isOpen, onClick }) => {
  const todayDate = useMemo(() => {
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
    return `${day}/${monthsShort[now.getMonth()]}`;
  }, []);

  const readingsDoMes = useMemo(() => {
    const mesAbreviado = month.substring(0, 3);
    return JsonReading.filter((item) => {
      const id = parseInt(item.id);
      if (month.includes('26')) return item.data.includes('Mar') && id < 50;
      if (month.includes('27')) return item.data.includes('Mar') && id > 350;
      return item.data.includes(mesAbreviado);
    });
  }, [month]);

  return (
    <FadeUp delay={0.3}>
      <div className="rounded-3xl border border-white/5 bg-plan-surface-black px-6 py-8 shadow-lg md:p-8">
        {/* Cabeçalho do Toggle */}
        <div
          className="flex cursor-pointer items-center justify-between"
          onClick={onClick}
        >
          <h2 className="font-raleway text-2xl font-bold text-white">
            Mês de {month.replace(/\/(26|27)/g, '')}
          </h2>
          <ChevronDown
            size={32}
            className={`text-plan-green-brand transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </div>

        {/* 2. O NOVO ENVELOPE (Substitui toda a div de grid) */}
        <Collapse isOpen={isOpen}>
          <div className="space-y-4 pt-8">
            {readingsDoMes.map((item) => (
              <Reading
                key={item.id}
                data={item.data}
                chapters={item.chapters}
                isToday={item.data === todayDate}
                id={item.id}
              />
            ))}
          </div>
        </Collapse>
      </div>
    </FadeUp>
  );
});

export default MonthToggle;
