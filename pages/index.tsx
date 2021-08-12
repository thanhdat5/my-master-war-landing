import Head from 'next/head'
import FooterComponent from '../components/Footer'
import HeaderComponent from '../components/Header'
import TeamsComponent from '../components/Teams'
import PartnersComponent from '../components/Partners'
// import GetFreeMATComponent from '../components/GetFreeMAT'
import AboutUsComponent from '../components/AbountUs'
import GameComponent from '../components/Game'
import TokensComponent from '../components/Tokens'
import FAQsComponent from '../components/FAQs'
import { ContactUsComponent } from '../components/ContactUs'
import { RoadMapComponent } from '../components/RoadMap'

export default function Home() {
  return (
    <>
      <Head>
        <title>My Master War - Three Kingdoms NFT Game</title>
        <meta name="description" content="The Three Kingdoms game is a quite famous game in the world, especially in China and Asian countries" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" property="og:title" content="My Master War - Three Kingdoms NFT Game" />
        <meta name="twitter:card" content="My Master War - Three Kingdoms NFT Game" />
        <meta property="og:image" content="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </Head>

      <HeaderComponent />
      <main>
        <AboutUsComponent />
        <GameComponent />
        <RoadMapComponent />
        <TokensComponent />
        <TeamsComponent />
        <PartnersComponent />
        <FAQsComponent />
        <ContactUsComponent />
        {/* <GetFreeMATComponent /> */}
      </main>
      <FooterComponent />
    </>
  )
}
