import Head from 'next/head'
import { Container } from 'react-bootstrap'
import FooterComponent from '../components/Footer'
import HeaderComponent from '../components/Header'
import TeamsComponent from '../components/Teams'
import PartnersComponent from '../components/Partners'
import GetFreeMATComponent from '../components/GetFreeMAT'
import AboutUsComponent from '../components/AbountUs'
import FearturesComponent from '../components/Feartures'
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
      </Head>

      <HeaderComponent />
      <main>
        <Container>

        </Container>
        <AboutUsComponent />
        <FearturesComponent />
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
