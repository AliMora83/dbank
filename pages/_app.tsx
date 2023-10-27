/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <script src="https://unpkg.com/xrpl/build/xrpl-latest-min.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
