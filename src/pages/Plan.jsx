import { useState } from 'react';

import MonthToggle from '../components/MonthToggle';
import Header from '../components/sections/Header';

const Plan = () => {
  const [activeMonth, setActiveMonth] = useState('Março/26');

  const months = [
    'Março/26',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
    'Janeiro',
    'Fevereiro',
    'Março/27',
  ];

  return (
    <main className="min-h-screen bg-plan-surface-black">
      <Header />
      <div className="mx-auto -mt-12 grid max-w-[1440px] grid-cols-1 gap-4 px-3 pb-20 md:px-6">
        {months.map((month) => (
          <MonthToggle
            key={month}
            month={month}
            isOpen={activeMonth === month}
            onClick={() => setActiveMonth(activeMonth === month ? null : month)}
          />
        ))}
      </div>
    </main>
  );
};

export default Plan;
