const Stock = ({width = '100%', height = '100%'}) => {
  return (
    <svg width={width} height={height} viewBox='0 0 63 55' fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M46.883 24.551l4.947 3.968 10.167-13.25M1 33.615l7.117-7.135 5.083 5.097 8.133-11.212 9.15 10.193 5.653-6.59"
        stroke="#12395D"
        strokeWidth="1.5"
        strokeMiterlimit={10}
      />
      <path
        d="M62 1H1v53h61V1zM41.672 33.615V54M41.672 1v14.27"
        stroke="#12395D"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
      <path
        d="M41.665 27.5c3.369 0 6.1-2.738 6.1-6.116 0-3.377-2.731-6.115-6.1-6.115-3.369 0-6.1 2.738-6.1 6.115 0 3.378 2.731 6.116 6.1 6.116z"
        stroke="#12395D"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
    </svg>
  );
};

export default Stock;
