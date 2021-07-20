import { colors, fonts, media, sizes } from '@ui/common';
import styled from 'styled-components';

export const Advantages__Container = styled.div`
  padding-top: 60px;

  @media (min-width: ${sizes.tablet}px) {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const Advantage = styled.div`
  width: 100%;
  max-width: 325px;
  margin-bottom: 30px;
  flex-shrink: 0;

  @media (min-width: ${sizes.tablet}) {
    display: flex;
    max-width: 430px;
  }

  @media (min-width: ${sizes.laptop}) {
    margin-bottom: 80px;
  }

  h3 {
    color: ${colors.blueDark};
    margin-bottom: 10px;
    font-weight: ${fonts.Raleway.weight['700']};
    font-size: 16px;
    @media (min-width: ${sizes.tablet}) {
      font-size: 23px;
      margin-bottom: 20px;
    }
  }

  p {
    font-size: 12px;
    line-height: 18px;
    @media (min-width: ${sizes.tablet}) {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

export const Info = styled.div``;

export const IconWrap = styled.div`
  margin-bottom: 15px;
  max-width: 35px;
  max-height: 40px;

  @media (min-width: ${sizes.tablet}) {
    margin-bottom: 0;
    margin-right: 15px;
    max-width: 61px;
  } ;
`;
