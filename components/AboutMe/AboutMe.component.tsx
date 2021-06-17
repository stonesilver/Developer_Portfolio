import SectionHeader from '../SectionHeader/SectionHeader.component';
import Button from '../button/Button.component';
import aboutMeStyles from './AboutMe.module.scss';

import React from 'react';

const AboutMe = () => {
  return (
    <div id={aboutMeStyles.aboutMe}>
      <SectionHeader text='About Me' />
      <section className={aboutMeStyles.aboutMeContent}>
        <div className={aboutMeStyles.info}>
          <span className={aboutMeStyles.text}>
            Results-oriented Front-end Developer dedicated to creating and
            optimizing interactive, user-friendly, and feature-rich websites.
            Leverage analytical skills and strong attention to detail in order
            to deliver original and efficient web solutions, provide technical
            knowledge and expertise, build new websites from start to finish,
            and I'm always up for learning new things.
          </span>
        </div>
        <div className={aboutMeStyles.thinkSolveDebug}>
          <span className={`${aboutMeStyles.think} ${aboutMeStyles.text}`}>
            Think<span className={aboutMeStyles.dot}>.</span>
          </span>
          <span className={`${aboutMeStyles.solve} ${aboutMeStyles.text}`}>
            Solve<span className={aboutMeStyles.dot}>.</span>
          </span>
          <br />
          <span className={`${aboutMeStyles.debug} ${aboutMeStyles.text}`}>
            Debug<span className={aboutMeStyles.dot}>.</span>
          </span>
        </div>
        <Button text='Contact Me' backgroundColor={true} />
      </section>
    </div>
  );
};

export default AboutMe;
