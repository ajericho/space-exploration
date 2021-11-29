
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/Theme'
import { GlobalStyles } from '../styles/Global'

import { Wrapper } from '../components/Styles/Wrapper'

import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';

import { useWindowSize } from '../helper/useWindowSize';
import { findImage } from '../helper/findImage';
import Navbar from '../components/Navbar'
import { favicon } from '../public/assets/favicon-32x32.png'


function MyApp({ Component, pageProps }) {

  //Find the device size, router, and set background image
  const deviceSize = useWindowSize();
  const router = useRouter();
  const backgroundImage = findImage({ deviceSize, router });


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Head>
        <title>Space Exploration</title>
        <meta name="description" content="Created with Next.js from a Frontend Mentor Design" />
        <link rel="icon" href={favicon} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;600&family=Barlow:wght@300&family=Bellefair&display=swap" rel="stylesheet" />
      </Head>
      <Image
        className="desktopImg"
        src={backgroundImage}
        alt="BackgroundImage"
        layout={'fill'}
        objectFit="cover"
        priority

      />
      <Wrapper>
        <Navbar />

        <Component {...pageProps} />

      </Wrapper>
    </ThemeProvider>
  )
}

export default MyApp
