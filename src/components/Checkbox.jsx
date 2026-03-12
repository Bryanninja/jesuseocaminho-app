const Checkbox = ({ isChecked, onClick }) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* O Efeito de Pulse */}
      {isChecked && (
        <div className="absolute h-full w-full animate-ping rounded-full bg-plan-green-brand opacity-20 [animation-fill-mode:forwards] [animation-iteration-count:1]"></div>
      )}

      {/* Botão Original */}
      <button
        onClick={onClick}
        type="button"
        className="group relative z-10 flex items-center justify-center rounded-full outline-none"
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 md:h-[60px] md:w-[60px]"
        >
          {/* Borda do Círculo Estática (Cinza) */}
          <circle
            cx="30"
            cy="30"
            r="28.5"
            strokeWidth="3"
            className="stroke-[#A6BAAE]"
          />

          {/* A "Ovelha" (Preenchimento) */}
          <g clipPath="url(#clip0_27_319)">
            <path
              d="M41.0295 48.3002C41.2494 46.108 39.7136 45.483 39.6351 44.9302C39.5691 44.4842 40.4077 44.0445 40.6275 43.5734C41.3247 42.1005 40.8285 40.4704 39.8392 39.2801C41.9278 37.7035 42.4083 35.4076 40.2632 33.6049C42.7695 31.8712 42.8543 28.8121 40.1313 27.2701C42.1508 23.8592 38.7651 23.0332 38.9033 19.9648C40.2255 19.7104 45.0779 18.7964 45.2663 17.2763C45.0402 15.059 41.6388 16.1048 39.6696 15.5678C37.559 14.9899 36.9497 13.0961 34.9837 12.4208C32.9454 11.7204 29.1859 11.8429 27.4209 13.1652C26.6577 13.7336 26.3279 15.0716 25.5647 15.2255C22.9045 14.635 20.6495 14.1513 18.071 15.4296C17.4366 16.309 21.4033 19.1136 22.3423 19.3712C22.9862 19.5471 23.674 19.3963 24.3241 19.5408L24.8172 20.2663C24.0226 22.1067 22.0754 22.9233 22.5308 25.4233C20.9133 25.2349 20.2224 26.2776 19.3461 27.3894C17.358 25.9635 15.7343 26.3655 14.2236 28.1652C12.581 26.1677 10.2318 26.042 8.50126 27.9799C8.3505 27.7537 8 27 7.5 27C7 27 7 27.5496 7 27.9736C7 41.2211 17.7789 52 31.0264 52C34.076 52 36.9906 51.4221 39.6759 50.3825C40.282 49.9459 40.9227 49.3241 41.0295 48.3002Z"
              fill="#69BB8A"
              className={`origin-center transition-all duration-300 ease-out ${
                isChecked ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
              } ${!isChecked && 'md:group-hover:scale-100 md:group-hover:opacity-40'} `}
            />
          </g>
          <defs>
            <clipPath id="clip0_27_319">
              <rect
                width="38.2632"
                height="40"
                fill="white"
                transform="translate(7 12)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default Checkbox;
