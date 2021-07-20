import { Container } from '@ui/blocks';
import { Section, Intro__Container, Info, Pic, ButtonsWrap } from './styled';
import NextImage from 'next/image';
import { intro as introData } from '../../data/pages/index';
import { Button } from '@ui/elements/Button';

const Intro = () => {
  return (
    <Section>
      <Container>
        <Intro__Container>
          <Info>
            <h1 className="title">{introData.title}</h1>
            <h2 className="title">{introData.title2}</h2>
            <p>{introData.description.paragraph1}</p>
            <p>{introData.description.paragraph2}</p>
            <ButtonsWrap>
              <Button href={introData.button1.link}>
                {introData.button1.text}
              </Button>
              <Button themeWhite href={introData.button2.link}>
                {introData.button2.text}
              </Button>
            </ButtonsWrap>
          </Info>
          <Pic>
            <NextImage
              src={introData.image}
              width={820}
              height={615}
              layout="intrinsic"
            />
          </Pic>
        </Intro__Container>
      </Container>
    </Section>
  );
};

export default Intro;
