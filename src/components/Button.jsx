import { Link } from 'react-router-dom';

import { tv } from 'tailwind-variants';

const buttonStyles = tv({
  base: 'inline-flex items-center justify-center rounded-xl font-bold text-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-plan-green-brand focus-visible:ring-offset-2 focus-visible:ring-offset-plan-black-text',

  variants: {
    color: {
      primary:
        'bg-plan-green-brand hover:bg-plan-green-brand/90 active:scale-95',
      outline:
        'border-2 border-plan-green-brand hover:bg-plan-green-brand/30 active:scale-95',
      ghost:
        'border-2 border-transparent hover:bg-plan-green-brand/30 active:border-plan-green-brand active:scale-95',
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

const Button = ({ children, to, color, size, className, ...props }) => {
  const styles = buttonStyles({ color, size, className });

  // 2. Se a prop 'to' existir, renderiza o Link do React Router
  if (to) {
    return (
      <Link to={to} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  // 3. Se não tiver 'to', renderiza o botão nativo
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;
