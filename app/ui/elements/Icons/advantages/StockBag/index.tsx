import React from 'react';

const StockBag = ({width = '100%', height = '100%'}) => {
  return (
    <svg width={width} height={height} viewBox='0 0 63 50' fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.1 34.085V5.135C7.1 2.853 8.92 1 11.167 1h40.666C54.08 1 55.9 2.852 55.9 5.136v28.949M39.633 40.288v3.102H23.367v-3.102H1c0 4.568 3.642 8.271 8.133 8.271h44.734c4.491 0 8.133-3.703 8.133-8.27H39.633z"
        stroke="#12395D"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
      <path
        d="M34.55 9.271h-6.1V29.95h6.1V9.271zM21.333 21.678h-6.1v8.271h6.1v-8.271zM47.767 16.509h-6.1v13.44h6.1V16.51z"
        stroke="#12395D"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
    </svg>
  );
};

export default StockBag;
