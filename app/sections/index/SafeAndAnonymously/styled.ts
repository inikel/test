import styled from 'styled-components';
import { Section as baseSection } from '@ui/blocks/index';
import { colors, fonts, sizes } from '@ui/common';

export const Section = styled(baseSection)`
  padding-bottom: 50px;
  padding-top: 30px;
  background-color: ${colors.aliceBlue};

  @media (min-width: ${sizes.laptop}px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  @media (min-width: ${sizes.desktop}px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  h2 {
    text-align: center;
    font-size: 24px;
    line-height: 26px;
    font-weight: ${fonts.Raleway.weight['600']};
    color: ${colors.blueDarkText};
    margin-bottom: 30px;

    @media (min-width: ${sizes.laptop}px) {
      margin-bottom: 55px;
      font-size: 42px;
      line-height: 49px;
    }
  }
`;

export const Grid = styled.div`
  @media (min-width: ${sizes.tablet}px) {
    justify-content: space-between;
    display: flex;
    align-items: flex-start;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  line-height: 26px;
  margin-bottom: 30px;

  @media (min-width: ${sizes.desktop}px) {
    margin-bottom: 55px;
    font-size: 42px;
    line-height: 49px;
  }
`;

export const Col = styled.div`
  max-width: 400px;
  padding: 30px 0;

  @media (min-width: ${sizes.laptop}px) {
    padding: 40px 0;
  }

  h4 {
    font-size: 20px;
    font-weight: ${fonts.Raleway.weight['700']};
    line-height: 24px;
    color: ${colors.blueDarkText};
    margin-bottom: 10px;

    @media (min-width: ${sizes.laptop}px) {
      margin-bottom: 20px;
    }
  }

  p {
    font-size: 12px;
    line-height: 18px;
    color: ${colors.black};
    margin-bottom: 30px;

    @media (min-width: ${sizes.laptop}px) {
      font-size: 14px;
      line-height: 23px;
      margin-bottom: 40px;
    }
  }
`;

export const ColCard = styled(Col)`
  max-width: 440px;
  border: 1px solid #ccd1d9;
  box-sizing: border-box;
  box-shadow: 0px 2px 11px rgba(196, 196, 221, 0.211047);
  border-radius: 20px;
  padding: 30px 20px;

  @media (min-width: ${sizes.laptop}px) {
    padding: 40px;
  }

  h5 {
    color: ${colors.blueDarkText};
    font-size: 14px;
    line-height: 18px;
    font-weight: ${fonts.Raleway.weight['700']};

    @media (min-width: ${sizes.laptop}px) {
      line-height: 24px;
    }
  }
`;

export const Footer = styled.footer``;

export const Footer__Pics = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 25px;

  @media (min-width: ${sizes.laptop}px) {
    padding-bottom: 50px;
  }
`;

export const Footer__Text = styled.div`
  font-size: 12px;
  line-height: 18px;
  font-weight: ${fonts.Raleway.weight['600']};
  color: ${colors.blueDarkText};
  padding-top: 30px;
  margin-bottom: 0;
  border-top: 2px solid #ccd1d9;

  @media (min-width: ${sizes.laptop}px) {
    font-size: 14px;
    line-height: 21px;
  }
`;
