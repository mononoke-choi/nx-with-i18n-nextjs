import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import Head from 'next/head';
const i18config = require('../next-i18next.config');

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to web!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default appWithTranslation(CustomApp, i18config);
