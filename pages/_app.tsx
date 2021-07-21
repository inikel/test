import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import '@ui/scss/global.scss';
import Header from '@components/Header';
import Footer from '@components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
    line-height: 1.15;
  }

  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  ul,
  ol,
  li {
    margin: 0;
    padding: 0;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PengeProfilen</title>
        <meta name="PengeProfilen" content="PengeProfilen forside" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Footer />
    </>
  );
}
