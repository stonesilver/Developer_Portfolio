import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import Layout from '../components/Layout/Layout.component';
import NavBar from '../components/navbar/Navbar.component';
import Footer from '../components/Footer/Footer.component';
import '../styles/globals.scss';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
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
