import { useState } from 'react';

import ArrowBack from '../components/ArrowBack';
import MonthToggle from '../components/MonthToggle';
import Header from '../components/sections/Header';

const Plan = () => {
  const getInitialMonth = () => {
    const now = new Date();
    const monthIndex = now.getMonth();
    const yearShort = now.getFullYear().toString().slice(-2);

    // Mapeamento para garantir que o estado bata exatamente com o array 'months'
    const monthNamesPT = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];

    let currentMonthLabel = monthNamesPT[monthIndex];

    if (currentMonthLabel === 'Março') {
      return `Março/${yearShort}`;
    }

    return currentMonthLabel;
  };

  const [activeMonth, setActiveMonth] = useState(getInitialMonth());

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
    <main className="relative min-h-screen bg-plan-surface-black">
      <ArrowBack to="/" />
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
