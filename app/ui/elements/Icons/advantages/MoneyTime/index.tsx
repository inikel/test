const MoneyTime = ({ width = '100%', height = '100%' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.433 15.233v12.2h-12.2"
        stroke="#12385D"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M37.6 39.633v8.134c0 3.369 5.461 6.1 12.2 6.1 6.738 0 12.2-2.731 12.2-6.1v-8.134"
        stroke="#12385D"
        strokeWidth="1.5"
      />
      <path
        d="M37.6 47.767V55.9c0 3.37 5.461 6.1 12.2 6.1 6.738 0 12.2-2.73 12.2-6.1v-8.133"
        stroke="#12385D"
        strokeWidth="1.5"
      />
      <ellipse
        cx="49.8"
        cy="39.633"
        rx="12.2"
        ry="6.1"
        stroke="#12385D"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M29.467 53.79c-.671.05-1.35.077-2.034.077C12.834 53.867 1 42.033 1 27.433 1 12.834 12.834 1 27.433 1c13.915 0 25.32 10.752 26.357 24.4"
        stroke="#12385D"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default MoneyTime;
