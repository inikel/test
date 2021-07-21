import Intro from '@sections/index/Intro';
import Advantages from '@sections/index/Advantages';
import NextScript from 'next/script';
import TrustPilotWidget from '@components/TrustPilotWidget';
import Articles from '@sections/index/Articles';
import ReviewsFrame from '@components/ReviewsFrame';
import SafeAndAnonymously from '@sections/index/SafeAndAnonymously';

const Index = () => {
  return (
    <>
      <Intro />
      <TrustPilotWidget />
      <Advantages />
      <Articles />
      <ReviewsFrame />
      <SafeAndAnonymously />
      <NextScript
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
      />
    </>
  );
};

export default Index;
