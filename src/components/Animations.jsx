import { motion } from 'framer-motion';

// Animação de Fade In com subidinha (Ideal para Cards e Seções)
export const FadeUp = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }} // Anima quando aparece na tela
    viewport={{ once: true }} // Só anima uma vez
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// Animação para Modais (Escala + Fade)
export const ModalTransition = ({ children, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95, y: 20 }}
    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
    className={className}
  >
    {children}
  </motion.div>
);

// Animação de cima para baixo (Ideal para Headers)
export const FadeDown = ({ children, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// Animação de Sanfona/Accordion (Altura Automática)
export const Collapse = ({ isOpen, children, className = '' }) => (
  <motion.div
    initial={false}
    animate={{
      height: isOpen ? 'auto' : 0,
      opacity: isOpen ? 1 : 0,
    }}
    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
    className={`overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);
