import { UseReading } from '../context/ReadingContext';

const Dashboard = ({ percentage }) => {
  // Configurações de tamanho:
  // No mobile: w-32 (128px), cx/cy em 64, raio 54
  // No XL: w-48 (192px), cx/cy em 96, raio 80

  return (
    <div className="relative flex items-center justify-center">
      {/* 1. O SVG muda de h-32 para xl:h-48 */}
      <svg className="h-36 w-36 -rotate-90 transform xl:h-48 xl:w-48">
        {/* Círculo de Fundo */}
        <circle
          className="text-white/10"
          cx="50%" // Usar porcentagem facilita o redimensionamento
          cy="50%"
          r="42%" // Raio relativo ao container
          stroke="currentColor"
          strokeWidth="22"
          fill="transparent"
        />

        {/* Círculo de Progresso */}
        <circle
          cx="50%"
          cy="50%"
          r="42%"
          stroke="url(#green-gradient)"
          strokeWidth="22"
          fill="transparent"
          strokeDasharray="100 100" // Técnica de porcentagem pura em SVG
          strokeDashoffset={100 - percentage}
          pathLength="100" // Define que o total do caminho é 100 (facilita muito a conta!)
          className="transition-all duration-1000 ease-out"
        />

        <defs>
          <linearGradient id="green-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#68B4BA" />
            <stop offset="100%" stopColor="#68B4BA" />
          </linearGradient>
        </defs>
      </svg>

      {/* Texto Centralizado também cresce */}
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-xl font-bold leading-none text-white xl:text-2xl">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
