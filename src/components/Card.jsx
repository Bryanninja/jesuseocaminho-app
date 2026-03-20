// Card.jsx
const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`flex flex-1 flex-col items-center justify-center rounded-3xl bg-plan-black-text p-8 shadow-xl md:flex-row md:p-10 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
