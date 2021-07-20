import { css } from 'styled-components';

export const colors = {
  beige: '#FDE8E2',
  blueDark: '#12395D',
  white: '#FFF',
  black: '#000',
};

export const sizes = {
  tablet: 768,
  laptop: 1024,
  desktop: 1320,
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
