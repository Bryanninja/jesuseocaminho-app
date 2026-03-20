import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
// 1. Importe o motion
import { tv } from 'tailwind-variants';

const buttonStyles = tv({
  base: 'inline-flex items-center justify-center rounded-xl font-bold text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-plan-green-brand focus-visible:ring-offset-2 focus-visible:ring-offset-plan-black-text',
  variants: {
    color: {
      primary: 'bg-plan-green-brand hover:bg-plan-green-brand/90',
      outline: 'border-2 border-plan-green-brand hover:bg-plan-green-brand/30',
      ghost:
        'border-2 border-transparent hover:bg-plan-green-brand/30 active:border-plan-green-brand',
    },
    size: {
      sm: 'text-sm px-3 py-2',
      md: 'text-base px-4 py-3',
      lg: 'text-lg px-6 py-3',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

// 2. Criamos uma versão "motion" do Link do React Router
export const MotionLink = motion.create(Link);

const Button = ({ children, to, color, size, className, ...props }) => {
  const styles = buttonStyles({ color, size, className });

  // Configurações de animação tátil (SUPER LEVE)
  const tapAnimation = {
    whileHover: { scale: 1.02 }, // Cresce quase nada (elegância)
    whileTap: { scale: 0.95 }, // Afunda ao clicar (feedback tátil)
    transition: { type: 'spring', stiffness: 400, damping: 17 }, // Mola rápida
  };

  if (to) {
    return (
      <MotionLink to={to} className={styles} {...tapAnimation} {...props}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button className={styles} {...tapAnimation} {...props}>
      {children}
    </motion.button>
  );
};

export default Button;
