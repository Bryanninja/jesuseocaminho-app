import Bible from '../assets/SVG/Bible.svg';
import { UseReading } from '../context/ReadingContext';
import Button from './Button';
import Checkbox from './Checkbox';

const Reading = ({ id, data, chapters }) => {
  const { completedDays, toggleDay } = UseReading();

  const isChecked = completedDays.includes(id);

  return (
    <div className="flex items-center justify-between rounded-3xl bg-plan-black-text p-4">
      <div className="flex items-center gap-4 md:gap-6">
        <Checkbox isChecked={isChecked} onClick={() => toggleDay(id)} />
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-white">{data}</h3>
          <p className="text-lg text-white">{chapters}</p>
        </div>
      </div>

      <Button size="md" color="ghost">
        <img src={Bible} alt="" />
      </Button>
    </div>
  );
};

export default Reading;
