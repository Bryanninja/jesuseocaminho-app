import { useState } from 'react';

import Bible from '../assets/SVG/Bible.svg';
import { UseReading } from '../context/ReadingContext';
import Button from './Button';
import ChapterReading from './ChapterReading';
import Checkbox from './Checkbox';

const Reading = ({ isToday, id, data, chapters }) => {
  const { completedDays, toggleDay } = UseReading();

  // Crie o estado para controlar se a Bíblia está aberta
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isChecked = completedDays.includes(id);

  return (
    <div className="relative">
      <div
        id={isToday ? 'today-reading' : undefined}
        className="flex flex-col gap-4"
      >
        {isToday && (
          <h3 className="font-raleway text-xl font-bold text-white">
            Leitura de Hoje
          </h3>
        )}
        <div
          className={`flex items-center justify-between rounded-3xl border-2 bg-plan-black-text p-4 ${
            isToday ? 'border-plan-green-opaque' : 'border-transparent'
          }`}
        >
          <div className="flex items-center gap-4 md:gap-6">
            <Checkbox isChecked={isChecked} onClick={() => toggleDay(id)} />
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-white">{data}</h3>
              <p className="text-lg text-white">{chapters}</p>
            </div>
          </div>

          {/* O Botão muda o estado*/}
          <Button size="md" color="ghost" onClick={() => setIsModalOpen(true)}>
            <img src={Bible} alt="Abrir Bíblia" />
          </Button>
        </div>
      </div>

      {/* O Modal */}
      <ChapterReading
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fullReadingString={chapters} // Passa "Gn 13-15, Mt 5"
        isCompleted={isChecked}
        onComplete={() => {
          toggleDay(id);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default Reading;
