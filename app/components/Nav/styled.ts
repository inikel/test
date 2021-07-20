import { colors, fonts, sizes } from '@ui/common';
import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.beige};
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transform: ${(props) =>
    props.visible ? 'translateX(0)' : 'translateX(-100%)'};
  transition: 300ms all;
  padding: 100px 30px;
  z-index: 3;

  @media (min-width: ${sizes.laptop}px) {
    flex-direction: row;
    align-items: center;
    position: static;
    height: auto;
    width: auto;
    background-color: transparent;
    padding: 0;
  }

  a {
    font-size: 24px;
    color: #1c395a;
    font-weight: ${fonts.Raleway.weight['500']};
    margin-bottom: 20px;
    text-decoration: none;

    @media (min-width: ${sizes.laptop}px) {
      margin-right: 30px;
      margin-bottom: 0;
      font-size: 14px;
    }
    @media (min-width: ${sizes.desktop}px) {
      margin-right: 40px;
    }
  }
`;

export const Nav__Buttons = styled.div`
  margin-left: 18px;
  display: none;

  @media (min-width: ${sizes.laptop}px) {
    display: block;
  }
  
  @media (min-width: ${sizes.desktop}px) {
    margin-left: 38px;
  }
`;

export const BurgerBtn = styled.div`
  width: 17px;
  height: 11px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 33;
  position: relative;

  @media (min-width: ${sizes.laptop}px) {
    display: none;
  }

  span {
    height: 1px;
    width: 100%;
    background-color: ${colors.blueDark};
    position: ${(props) => (props.isNavVisible ? 'absolute' : 'static')};
    top: 50%;
    left: 0;
    transition: 300ms all;

    &:first-child {
      transform: ${(props) =>
        props.isNavVisible
          ? 'translateY(-50%) rotate(45deg);'
          : 'translateY(-50%)'};
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.isNavVisible ? '0' : '1')};
    }

    &:last-child {
      transform: ${(props) =>
        props.isNavVisible
          ? 'translateY(-50%) rotate(135deg);'
          : 'translateY(-50%)'};
    }
  }
`;
