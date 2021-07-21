import { css } from 'styled-components';

export const colors = {
  beige: '#FDE8E2',
  blueDark: '#12395D',
  blueDarkText: '#1C395A',
  white: '#FFF',
  black: '#000',
  aliceBlue: '#F5F8FC',
};

export const sizes = {
  mobile: 375,
  tablet: 768,
  laptop: 1024,
  desktop: 1400,
};

export const fonts = {
  Raleway: {
    name: 'Raleway',
    weight: {
      '100': 100,
      '200': 200,
      '300': 300,
      '400': 400,
      '500': 500,
      '600': 600,
      '700': 700,
      '800': 800,
      '900': 900,
    },
  },
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => `
      @media (min-width: ${sizes[label]}px) {
        ${css(...args)};
      }
    `;
  return accumulator;
}, {});
