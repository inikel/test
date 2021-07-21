import { Section, Article, Article__Info, Article__Pic } from './styled';
import { articles as data } from '@data/pages/index';
import NextImage from 'next/image';
import { Container } from '@ui/blocks';

const Articles = () => {
  return (
    <>
      {data.map((article) => (
        <Section key={article.id} bgAliceBlue={article.bgAliceBlue}>
          <Container>
            <Article rowReverse={article.rowReverse}>
              <Article__Pic>
                <NextImage
                  src={article.photo}
                  alt={article.alt}
                  width={680}
                  height={378}
                  layout="intrinsic"
                />
              </Article__Pic>
              <Article__Info marginLeft={article.rowReverse}>
                <h4>{article.title}</h4>
                <p>{article.description}</p>
              </Article__Info>
            </Article>
          </Container>
        </Section>
      ))}
    </>
  );
};

export default Articles;
