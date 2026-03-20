import { motion } from 'framer-motion';

const Dashboard = ({ percentage }) => {
  // Garantimos que a porcentagem fique entre 0 e 100 para evitar erros de renderização
  const safePercentage = Math.min(100, Math.max(0, percentage));

  return (
    <div className="relative flex items-center justify-center">
      {/* SVG Container:
        - h-36 w-36 no mobile (144px)
        - xl:h-48 xl:w-48 em telas grandes (192px)
        - -rotate-90 para o progresso começar do topo (meio-dia)
      */}
      <svg className="h-36 w-36 -rotate-90 transform xl:h-48 xl:w-48">
        {/* 1. Círculo de Fundo (Estático) */}
        <circle
          className="text-white/10" // Cor cinza bem suave
          cx="50%"
          cy="50%"
          r="42%" // Raio relativo para manter proporção
          stroke="currentColor"
          strokeWidth="22" // Largura da borda
          fill="transparent"
        />

        {/* 2. Círculo de Progresso (ANIMADO)
          - Usamos motion.circle para ganhar superpoderes de animação
        */}
        <motion.circle
          cx="50%"
          cy="50%"
          r="42%"
          stroke="#69BB8A"
          strokeWidth="22"
          fill="transparent"
          pathLength="100" // Define que o total do caminho é 100 unidades
          initial={{ pathLength: 0 }} // Começa no zero (invisível)
          animate={{ pathLength: safePercentage / 100 }} // Corre até a porcentagem real
          // Configuração da animação
          transition={{
            duration: 1.5, // Tempo da animação (1.5 segundos)
            ease: 'easeOut', // Começa rápido e desacelera no final
            delay: 0.8, // Começa DEPOIS que os blocos da Home já subiram
          }}

          //strokeDasharray="100 100" // Necessário para a técnica de pathLength
        />
      </svg>

      {/* 3. Texto Centralizado (ANIMADO)
        - Aparece com um leve fade-in depois que a barra começa a correr
      */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2, // Aparece quando a barra já estiver quase cheia
          duration: 0.5,
        }}
        className="absolute flex flex-col items-center justify-center"
      >
        <span className="text-xl font-bold leading-none text-white xl:text-2xl">
          {safePercentage}%
        </span>
      </motion.div>
    </div>
  );
};

export default Dashboard;
