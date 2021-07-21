import styled from 'styled-components';
import { Section as sectionBase } from '@ui/blocks';
import { colors, fonts, sizes } from '@ui/common';

export const Section = styled(sectionBase)`
  background-color: ${(p) => (p.bgAliceBlue ? '#F5F8FC' : colors.white)};
  padding-top: 30px;
  padding-bottom: 30px;

  @media (min-width: ${sizes.laptop}px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
  @media (min-width: ${sizes.desktop}px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

export const Article = styled.article`
  @media (min-width: ${sizes.tablet}px) {
    display: flex;
    flex-direction: ${(p) => (p.rowReverse ? 'row-reverse' : 'row')};
    justify-content: space-between;
    align-items: center;
  }
`;

export const Article__Info = styled.div`
  max-width: 450px;

  @media (min-width: ${sizes.tablet}px) {
    margin: ${(p) => (p.marginLeft ? '0 80px 0 0' : '0 0 0 80px')};
  }

  h4 {
    font-size: 18px;
    line-height: 24px;
    color: ${colors.blueDark};
    font-weight: ${fonts.Raleway.weight['700']};
    margin-bottom: 10px;

    @media (min-width: ${sizes.laptop}px) {
      font-size: 26px;
      line-height: 34px;
      margin-bottom: 30px;
    }
  }
  p {
    color: ${colors.black};
    font-size: 12px;
    line-height: 18px;

    @media (min-width: ${sizes.laptop}px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const Article__Pic = styled.div`
  max-width: 680px;
  width: 100%;
`;
