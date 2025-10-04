import Head from 'next/head';
import Header from '../pages/Header';
import Hero from '../pages/Hero';
import Grid from '../pages/Grid';
import Partners from '../pages/Partners';
import Footer from '../pages/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>CLIMAFIX — Summit Highlight</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Grid />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
