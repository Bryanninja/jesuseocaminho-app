import { tv } from 'tailwind-variants';

const buttonStyles = tv({
  base: 'rounded-xl text-base font-bold text-white transition-all ',
  variants: {
    color: {
      primary: 'bg-plan-green-brand ',
      outline:
        ' border-2 border-plan-green-brand hover:bg-plan-green-brand/30 active:scale-95',
      ghost:
        ' border-2 border-transparent active:border-plan-green-brand hover:bg-plan-green-brand/30',
    },

    size: {
      sm: 'text-sm',
      md: 'text-base px-4 py-3',
      lg: 'px-6 py-3',
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

const Button = ({ children, color, size, className, ...props }) => {
  return (
    <button className={buttonStyles({ color, size, className })} {...props}>
      {children}
    </button>
  );
};

export default Button;
