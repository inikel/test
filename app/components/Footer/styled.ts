import styled from 'styled-components';
import { Section as baseSection } from '@ui/blocks';
import { colors, fonts, sizes } from '@ui/common';

export const Section = styled(baseSection)`
  background-color: ${colors.blueDark};
  padding-top: 66px;
`;

export const Info = styled.div`
  @media (min-width: ${sizes.laptop}px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
  }

  h4 {
    font-size: 14px;
    font-weight: ${fonts.Raleway.weight['700']};
  }

  h4,
  a,
  p {
    color: ${colors.white};
    margin-bottom: 10px;
  }

  a,
  p {
    font-size: 12px;
    line-height: 18px;
    font-weight: ${fonts.Raleway.weight['400']};
    text-decoration: none;
    display: block;

    @media (min-width: ${sizes.laptop}px) {
      font-size: 14px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Info__text = styled.div`
  padding-bottom: 50px;
  max-width: 440px;
`;

export const LinksAndContacts = styled.div`
  padding-bottom: 100px;

  @media (min-width: ${sizes.laptop}px) {
    display: flex;
    margin-left: auto;

    .contacts {
      margin-right: 50px;
    }
    .menu {
      margin-right: 195px;
    }
    .follow {
      margin-right: 50px;
    }
  }

  section {
    margin-bottom: 40px;

    @media (min-width: ${sizes.laptop}px) {
      max-width: 190px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const LogoSection = styled.div`
  border-top: 1px solid #515f75;
  padding: 50px 0;
`;
