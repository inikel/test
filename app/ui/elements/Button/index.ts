import styled from 'styled-components';
import { fonts, colors, media, sizes } from '@ui/common';

export const Button = styled.a`
  background-color: ${(props) =>
    props.themeWhite ? colors.white : colors.blueDark};
  color: ${(props) =>
    props.themeWhite ? colors.blueDark : colors.white} !important;
  font-weight: ${fonts.Raleway.weight['600']};
  font-size: 12px;
  line-height: 15px;
  padding: 12px 21px;
  text-decoration: none;
  box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  display: inline-block;
  text-align: center;
  cursor: pointer;

  @media (min-width: ${sizes.tablet}) {
    margin-bottom: 60px;
    font-size: 14px;
    line-height: 17px;
  }

  &:hover {
    box-shadow: 0 2px 11px 0 #c4c4dd;
    background-color: ${(props) => (props.themeWhite ? '' : '#0d2c48')};
  }
`;
