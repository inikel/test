import React from 'react';

const MoneyBag = ({width = '100%', height = '100%'}) => {
  return (
    <svg width={width} height={height} viewBox='0 0 63 78' fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M31.5 32.77v33.042M39.125 38.375c-3.7-2.033-15.358-3.558-15.358 3.456 0 8.387 14.803 5.427 14.803 12.829 0 7.401-9.622 6.846-16.283 4.439"
        stroke="#12395D"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
      <path
        d="M40.47 21.333H22.53S1 44.05 1 58.03C1 68.513 8.625 77.25 31.5 77.25S62 68.513 62 58.029c0-13.98-21.53-36.696-21.53-36.696z"
        stroke="#12395D"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
      <path
        d="M40.396 21.333L46.75 8.625l-7.625-2.542M23.875 6.083L16.25 8.625l6.354 12.708"
        stroke="#12395D"
        strokeWidth="1.5"
        strokeMiterlimit={10}
      />
      <path
        d="M26.417 11.167L21.333 1h20.334l-5.084 10.167"
        stroke="#12395D"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
    </svg>
  );
};

export default MoneyBag;
