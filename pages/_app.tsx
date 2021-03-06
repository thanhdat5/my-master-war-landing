import '../public/fonts/rajdhani/fonts.css'
import '../public/fonts/FontAwesome5/css/all.min.css'
import '../public/css/animate.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-block-ui/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import LoadingComponent from '../components/Loading'
import { ToastContainer } from 'react-toastify';

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    new WOW().init({
      mobile: false
    });
  }, [])

  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <LoadingComponent />
    <Component {...pageProps} />
    <ToastContainer />
  </>
}
export default MyApp
