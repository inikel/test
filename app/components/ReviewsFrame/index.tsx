import { reviewsFrame as data } from '@data/pages/index';
import { Container } from '@ui/blocks';
import { Title, Section } from './styled';

const ReviewsFrame = () => {
  return (
    <Section>
      <Container>
        <Title>{data.title}</Title>
        <div
          className="trustpilot-widget"
          data-locale="da-DK"
          data-template-id="53aa8912dec7e10d38f59f36"
          data-businessunit-id="5de102d7dfdca30001810e64"
          data-style-height="140px"
          data-style-width="100%"
          data-theme="light"
          data-stars="1,2,3,4,5"
          data-review-languages="da"
        >
          <a
            href="https://dk.trustpilot.com/review/pengeprofilen.dk"
            target="_blank"
            rel="noreferrer"
          >
            Trustpilot
          </a>
        </div>
      </Container>
    </Section>
  );
};

export default ReviewsFrame;
