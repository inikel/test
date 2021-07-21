import { advantages as advantagesData } from '@data/pages/index';
import { Advantages__Container, IconWrap } from './styled';
import Icon from '@ui/elements/Icons/IconsGetter';
import { Advantage, Info } from './styled';
import { Container, Section } from '@ui/blocks';

const Advantages = () => {
  return (
    <Section>
      <Container>
        <Advantages__Container>
          {advantagesData.map((item) => (
            <Advantage key={item.id}>
              <IconWrap>
                <Icon iconName={item.icon} />
              </IconWrap>
              <Info>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Info>
            </Advantage>
          ))}
        </Advantages__Container>
      </Container>
    </Section>
  );
};

export default Advantages;
