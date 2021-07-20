import { colors, fonts, sizes } from '@ui/common';
import styled from 'styled-components';

export const Section = styled.section`
  background-color: #fcd2c6;
`;

export const Intro__Container = styled.div`
  @media (min-width: ${sizes.tablet}px) {
    display: flex;
    align-items: stretch;
  }
`;

export const Intro__Section = styled.section`
  @media (min-width: ${sizes.tablet}px) {
    width: 50%;
  }

  h1,
  h2 {
    font-size: 28px;
    color: ${colors.blueDark};
    font-weight: ${fonts.Raleway.weight['800']};

    @media (min-width: ${sizes.desktop}px) {
      font-size: 42px;
    }
  }
  h2 {
    color: #b74e36;
    margin-bottom: 30px;
  }

  p {
    font-size: 14px;
    color: ${colors.blueDark};
    font-weight: ${fonts.Raleway.weight['500']};
    margin-bottom: 20px;
    max-width: 424px;

    @media (min-width: ${sizes.desktop}px) {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 30px;
    }
  }
`;

export const Info = styled(Intro__Section)`
  padding-bottom: 47px;
  max-width: 465px;

  @media (min-width: ${sizes.desktop}px) {
    padding-bottom: 65px;
  }
`;

export const Pic = styled(Intro__Section)`
  line-height: 0;
  max-width: 820px;
  display: flex;
  align-items: flex-end;
  margin-left: auto;
`;

export const ButtonsWrap = styled.div`
  a:first-child {
    margin-right: 11px;
  }
  a {
    min-width: 157px;
  }
`;
