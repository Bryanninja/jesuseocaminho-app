import { useState } from 'react';

import MonthToggle from '../components/MonthToggle';
import Header from '../components/sections/Header';

const Plan = () => {
  const [activeMonth, setActiveMonth] = useState('Março');

  const months = ['Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto'];

  return (
    <main className="min-h-screen bg-plan-surface-black">
      <Header />
      <div className="mx-auto -mt-12 grid max-w-[1440px] grid-cols-1 gap-4 px-6 pb-20">
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
