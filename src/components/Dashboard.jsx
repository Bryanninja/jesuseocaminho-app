const Dashboard = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* O Círculo de Progresso */}
      <svg className="h-48 w-48 rotate-180 transform">
        {/* Círculo de Fundo (Trilha) */}
        <circle
          cx="96"
          cy="96"
          r="80"
          stroke="currentColor"
          strokeWidth="32"
          fill="transparent"
          className="text-white/10"
        />
        {/* Círculo de Progresso Real */}
        <circle
          cx="96"
          cy="96"
          r="80"
          stroke="url(#green-gradient)"
          strokeWidth="32"
          strokeDasharray={502} // Circunferência total (2 * PI * r)
          strokeDashoffset={502 - (502 * 24) / 100} // variável de progresso
          fill="transparent"
        />
        {/* Definição do Gradiente do Círculo */}
        <defs>
          <linearGradient id="green-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#68B4BA" />
            <stop offset="100%" stopColor="#68B4BA" />
          </linearGradient>
        </defs>
      </svg>

      {/* Texto Centralizado */}
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-white">24%</span>
      </div>
    </div>
  );
};

export default Dashboard;
