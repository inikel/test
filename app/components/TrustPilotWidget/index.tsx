import { sizes } from '@ui/common';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 30px;

  @media (min-width: ${sizes.laptop}px) {
    padding-top: 100px;
  }

  iframe {
    height: 50px !important;
  }
`;

const TrustPilotWidget = () => {
  return (
    <Wrapper
      className="trustpilot-widget"
      data-locale="da-DK"
      data-template-id="5419b6ffb0d04a076446a9af"
      data-businessunit-id="5de102d7dfdca30001810e64"
      data-style-height="100px"
      data-style-width="100%"
      data-theme="light"
    >
      <a
        href="https://dk.trustpilot.com/review/pengeprofilen.dk"
        target="_blank"
        rel="noopener"
      >
        Trustpilot
      </a>
    </Wrapper>
  );
};

export default TrustPilotWidget;
