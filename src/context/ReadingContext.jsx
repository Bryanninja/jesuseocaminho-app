import { createContext, useContext, useEffect, useState } from 'react';

const ReadingContext = createContext();

export const ReadingProvider = ({ children }) => {
  const [completedDays, setCompletedDays] = useState(() => {
    // busque no localStorage ao carregar, se não achar, começa vazio []
    const saved = localStorage.getItem('plano-leitura-2026');
    return saved ? JSON.parse(saved) : [];
  });

  //Salva no localstorage
  useEffect(() => {
    localStorage.setItem('plano-leitura-2026', JSON.stringify(completedDays));
  }, [completedDays]);

  //Função para marcar/desmarcar um dia
  const toggleDay = (id) => {
    setCompletedDays(
      (prev) =>
        prev.includes(id)
          ? prev.filter((dayId) => dayId !== id) // Se já tem, remove
          : [...prev, id], // Se não tem, adiciona
    );
  };

  return (
    <ReadingContext.Provider value={{ completedDays, toggleDay }}>
      {children}
    </ReadingContext.Provider>
  );
};

// /Hook personalizado para facilitar o uso nos outros arquivos
export const UseReading = () => useContext(ReadingContext);
