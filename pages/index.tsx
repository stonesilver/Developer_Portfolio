import Head from 'next/head';
import Intro from '../components/Intro/Intro.component';
import AboutMe from '../components/AboutMe/AboutMe.component';
import Skills from '../components/Skills/Skills.component';
import Projects from '../components/Projects/Projects.component';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Ezenwa Chigozie</title>
        <meta name='description' content='Frontend Developer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Intro />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
