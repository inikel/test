import { sizes } from '@ui/common';
import styled from 'styled-components';

export const Section = styled.section`
  box-sizing: border-box;
`;

export const Container = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  margin-left: auto;
  margin-right: auto;
  max-width: ${sizes.desktop}px;
  width: 100%;

  @media (min-width: ${sizes.desktop + 50}px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const FlexContainer = styled(Container)`
  display: flex;
`;
