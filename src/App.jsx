import { Clock1 } from 'lucide-react';

function App() {
  return (
    <section className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex h-[256px] w-[496px] items-center justify-center gap-4 rounded-2xl bg-[#69bb8a] p-4">
        <h1 className="font-raleway text-4xl font-bold text-white">
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
