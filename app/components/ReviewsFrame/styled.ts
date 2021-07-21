import styled from 'styled-components';
import { Section as sectionBase } from '@ui/blocks';
import { colors, fonts, sizes } from '@ui/common';

export const Section = styled(sectionBase)`
  padding: 30px 0px;

  @media (min-width: ${sizes.laptop}px) {
    padding: 100px 0;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  line-height: 26px;
  margin-bottom: 30px;

  @media (min-width: ${sizes.laptop}px) {
    font-size: 42px;
    line-height: 54px;
    font-family: ${fonts.Raleway.weight['700']};
    text-align: center;
    color: ${colors.blueDark};
    margin-bottom: 87px;
  }
`;
