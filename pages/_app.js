import { useWindowSize } from '../hooks/useWindowSize';
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/Theme'
import { GlobalStyles } from '../styles/Global'

import { Wrapper, Layout } from '../components/Styles/Wrapper'

import Head from 'next/head'

import Image from 'next/image'

import imgDesktop from '../assets/home/background-home-desktop.jpg'
import imgTablet from '../assets/home/background-home-tablet.jpg'
import imgMobile from '../assets/home/background-home-mobile.jpg'


function MyApp({ Component, pageProps }) {

  const deviceSize = useWindowSize();

  function findImage() {
    if (deviceSize.width < '769') {
      return imgMobile

    } else if
      (deviceSize.width > '768' && deviceSize.width <= '1024') {
       return  imgTablet
    }
    else {
      return imgDesktop
    }
  }


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <title>Space Exploration</title>
        <meta name="description" content="Created with Next.js from a Frontend Mentor Design" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap" rel="stylesheet" />


      </Head>
      <Image
            className="desktopImg"
            src={findImage()}
            alt="BackgroundImage"
            layout={'fill'}
            objectFit="cover"
            priority

          /> 
      <Wrapper>
          <Layout>
            <div>
              navbar
              - logo, line, menu itmes
            </div>

      <Component {...pageProps} />
      </Layout>
      </Wrapper>
    </ThemeProvider>
  )
}

export default MyApp
