import { Navbar, NavToggleButton } from '@components/Nav';
import { Container, FlexContainer as X } from '@ui/blocks';
import { sizes } from '@ui/common';
import Logo from '@ui/elements/Icons/Logo';
import { useEffect, useRef, useState } from 'react';
import { HeaderContainer, Wrapper } from './styled';

const Header = () => {
  const [navVisible, setNavVisible] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    adjustNavVisibilityAndBodyPadding();

    window.addEventListener('resize', adjustNavVisibilityAndBodyPadding);

    function adjustNavVisibilityAndBodyPadding() {
      if (window.innerWidth > sizes.laptop) {
        setNavVisible(true);
      }
      const headerheight = wrapperRef ? wrapperRef.current.offsetHeight : '80px';

      document.body.style.paddingTop = `${headerheight}px`;
    }

    return () =>
      window.removeEventListener('resize', adjustNavVisibilityAndBodyPadding);
  }, [wrapperRef]);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <Wrapper ref={wrapperRef}>
      <Container>
        <HeaderContainer>
          <Logo />
          <Navbar visible={navVisible} />
          <NavToggleButton
            isNavVisible={navVisible}
            onClick={() => toggleNav()}
          />
        </HeaderContainer>
      </Container>
    </Wrapper>
  );
};

export default Header;
