import { BurgerBtn, Nav, Nav__Buttons } from './styled';
import navData from '../../data/components/nav';
import Link from 'next/link';
import { Button } from '@ui/elements/Button';

export const Navbar = ({ visible }) => {
  return (
    <Nav visible={visible}>
      {navData.links.map((link) => (
        <Link href={link.linkTo} key={link.id}>
          <a>{link.name}</a>
        </Link>
      ))}
      <Nav__Buttons>
        <a href={navData.loginBtn.link}>
          {navData.loginBtn.text}
        </a>
        <Button href={navData.signinBtn.link}>
          {navData.signinBtn.text}
        </Button>
      </Nav__Buttons>
    </Nav>
  );
};

export const NavToggleButton = ({ isNavVisible, onClick }) => {
  return (
    <BurgerBtn isNavVisible={isNavVisible} onClick={onClick}>
      <span />
      <span />
      <span />
    </BurgerBtn>
  );
};
