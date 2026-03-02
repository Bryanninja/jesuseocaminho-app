import { Clock1 } from 'lucide-react';

function App() {
  return (
    <section className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-6 md:w-[600px]">
      <div className="flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-[#69bb8a] p-8 md:flex-nowrap md:py-12">
        <h1 className="text-center font-raleway text-4xl font-bold text-white md:text-left">
          Disponível em Breve
        </h1>
        <Clock1
          size={32}
          className="animate-[spin_3s_linear_infinite] text-white"
        />
      </div>
    </section>
  );
}

export default App;
