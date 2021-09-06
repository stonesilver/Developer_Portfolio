import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Layout from '../components/Layout/Layout.component';
import NavBar from '../components/navbar/Navbar.component';
import Footer from '../components/Footer/Footer.component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.scss';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      mirror: true,
      offset: 30,
      easing: 'ease-in-cubic'
    });
  }, []);
  return (
    <>
      <NavBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  );
}

export default MyApp;
