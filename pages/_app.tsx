/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from './NavBar';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script src="https://unpkg.com/xrpl/build/xrpl-latest-min.js"></script>
        <script src='https://unpkg.com/xrpl@2.6.0'></script>
        <title>DBank Ripple Demo</title>
        <meta
          name="description"
          content="Diaspora Bank - Ripple Hackathon"
        />
        <link rel="icon" href="/db-logo.png" />		
      </Head>
      <NavBar/>
      <Component {...pageProps} />
    </>
  );
}
