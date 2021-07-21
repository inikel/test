import NextImage from 'next/image';
import { safeAndAnonymously as data } from '@data/pages/index';
import {
  Col,
  ColCard,
  Footer,
  Footer__Pics,
  Footer__Text,
  Section,
  Grid,
} from './styled';
import { Container } from '@ui/blocks';
import { Fragment } from 'react';

const SafeAndAnonymously = () => {
  return (
    <Section>
      <Container>
        <h2>{data.title}</h2>
        <Grid>
          <Col>
            {data.column1.blocks.map((item) => (
              <Fragment key={item.title}>
                <h4>{item.title}</h4>
                {item.desription.map((paragraph) => (
                  <p key={paragraph.id}>{paragraph.p}</p>
                ))}
              </Fragment>
            ))}
          </Col>
          <Col>
            {data.column2.blocks.map((item) => (
              <Fragment key={item.title}>
                <h4>{item.title}</h4>
                {item.desription.map((paragraph) => (
                  <p key={paragraph.id}>{paragraph.p}</p>
                ))}
              </Fragment>
            ))}
          </Col>
          <ColCard>
            <h4>{data.columnCard.title}</h4>
            <p>{data.columnCard.description}</p>
            <h5>{data.columnCard.subtitle}</h5>
            <p>{data.columnCard.subdescription}</p>
            <Footer>
              <Footer__Pics>
                <NextImage
                  src={data.columnCard.images.nemid.link}
                  alt={data.columnCard.images.nemid.alt}
                  width={161}
                  height={36}
                  layout="intrinsic"
                />
                {/* <NextImage
                  src={data.columnCard.images.nordik.link}
                  alt={data.columnCard.images.nordik.alt}
                  width={177}
                  height={77}
                  layout='intrinsic'
                /> */}
                <NextImage
                  src={data.columnCard.images.aiia.link}
                  alt={data.columnCard.images.aiia.alt}
                  width={106}
                  height={54}
                  layout="intrinsic"
                />
              </Footer__Pics>
              <Footer__Text>{data.columnCard.footerText}</Footer__Text>
            </Footer>
          </ColCard>
        </Grid>
      </Container>
    </Section>
  );
};

export default SafeAndAnonymously;
