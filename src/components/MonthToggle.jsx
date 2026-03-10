import { ChevronDown } from 'lucide-react';

import Reading from './Reading';

const MonthToggle = ({ month, isOpen, onClick }) => {
  return (
    <div className="rounded-3xl border border-white/5 bg-plan-surface-black p-8 shadow-lg transition-all duration-300">
      <div
        className="flex cursor-pointer items-center justify-between"
        onClick={onClick}
      >
        <h2 className="font-raleway text-2xl font-bold text-white">
          Mês de {month}
        </h2>
        <ChevronDown
          size={32}
          className={`text-plan-green-brand transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen
            ? 'mt-6 grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 pt-4">
            <Reading />
            <Reading />
            <Reading />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthToggle;
