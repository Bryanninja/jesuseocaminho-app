import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Toda vez que o caminho (URL) mudar, ele reseta o scroll
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Este componente não renderiza nada visualmente
};

export default ScrollToTop;
