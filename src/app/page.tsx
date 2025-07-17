import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import Featured from './components/Featured';
import HowItWorks from './components/HowItWorks';
import Meals from './components/Meals';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './globals.css';
export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Omnifood is a AI powered food subscription that will make you eat healthy again, 365 days per year, It's tailored to your personal tastes and nutritional needs."
        />
        <link rel="icon" href="/img/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Omnifood — Never cook again!</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <Featured />
        <HowItWorks />
        <Meals />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}