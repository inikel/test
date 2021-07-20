import Intro from '@sections/Intro';
import Advantages from '@sections/Advantages';
import NextScript from 'next/script';
import TrustPilotWidget from '@components/TrustPilotWidget';

const Index = () => {
  return (
    <>
      <Intro />
      <TrustPilotWidget />
      <Advantages />
      <NextScript
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
      />
    </>
  );
};

export default Index;
