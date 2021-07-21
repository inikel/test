import { colors, fonts, media, sizes } from '@ui/common';
import styled from 'styled-components';

export const Advantages__Container = styled.div`
  padding-top: 60px;
  padding-bottom: 30px;

  @media (min-width: ${sizes.tablet}px) {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 100px;
  }

  @media (min-width: ${sizes.desktop}px) {
    justify-content: space-between;
  }
`;

export const Advantage = styled.div`
  width: 100%;
  max-width: 325px;
  margin-bottom: 30px;
  flex-shrink: 0;

  @media (min-width: ${sizes.tablet}px) {
    display: flex;
    align-items: flex-start;
    max-width: 430px;
  }

  @media (min-width: ${sizes.laptop}px) {
    margin-bottom: 80px;
  }

  h3 {
    color: ${colors.blueDark};
    margin-bottom: 10px;
    font-weight: ${fonts.Raleway.weight['700']};
    font-size: 16px;
    @media (min-width: ${sizes.tablet}px) {
      font-size: 23px;
      margin-bottom: 20px;
    }
  }

  p {
    font-size: 12px;
    line-height: 18px;
    @media (min-width: ${sizes.tablet}px) {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

export const Info = styled.div``;

export const IconWrap = styled.div`
  margin-bottom: 15px;
  width: 100%;
  max-width: 35px;
  max-height: 40px;

  @media (min-width: ${sizes.tablet}px) {
    margin-bottom: 0;
    margin-right: 25px;
    max-width: 61px;
    max-height: 61px;
  } ;
`;
