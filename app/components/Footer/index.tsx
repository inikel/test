import { Container } from '@ui/blocks';
import {
  Section,
  Info,
  Info__text,
  LogoSection,
  LinksAndContacts,
} from './styled';
import { footerData } from '@data/components/footer';
import Logo from '@ui/elements/Icons/Logo';
import { colors } from '@ui/common';
import NextLink from 'next/link';

const Footer = () => {
  return (
    <Section>
      <Container>
        <Info>
          <LinksAndContacts>
            {footerData.linksAndContacts.map((section) => (
              <section className={section.alias} key={section.title}>
                <h4>{section.title}</h4>
                {section.links &&
                  section.links.map((link) => (
                    <NextLink key={link.name} href={link.link}>
                      <a>{link.name}</a>
                    </NextLink>
                  ))}
                {section.lines &&
                  section.lines.map((line) => (
                    <p key={line.name}>{line.value}</p>
                  ))}
              </section>
            ))}
          </LinksAndContacts>
          <Info__text>
            <h4>{footerData.textBlock.title}</h4>
            <p>{footerData.textBlock.paragraph1}</p>
            <p>{footerData.textBlock.paragraph2}</p>
          </Info__text>
        </Info>
        <LogoSection>
          <Logo width={230} height={44} fillColor={colors.beige} />
        </LogoSection>
      </Container>
    </Section>
  );
};

export default Footer;
