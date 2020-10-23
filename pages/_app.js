import Head from 'next/head'

import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body,html,#__next {
    margin: 0 auto;
    padding: 0;
    height: 100%;
    box-sizing: border-box;
    font-family: 'Roboto';
  }

  .awssld__content > div{
    height:100%;
    width:100%;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}


export default function MyApp({ Component, pageProps }) {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="title" content="Edmhar Fabros | Full Stack Developer" />
        <meta name="description" content="I'm a Full Stack Developer living in the Philippines. Building websites, securing cloud servers, and Software/Database designs are some of my key roles in this field." />
        <meta property="og:url" content="https://edmharfabros.github.io/portfolio/" />
        <meta property="og:title" content="Edmhar Fabros | Full Stack Developer" />
        <meta property="og:description" content="I'm a Full Stack Developer living in the Philippines. Building websites, securing cloud servers, and Software/Database designs are some of my key roles in this field." />
        <meta property="og:image" content="images/page_picture.jpg" />
        <title>Edmhar Fabros | Portfolio</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}