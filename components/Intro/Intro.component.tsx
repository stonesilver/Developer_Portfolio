import { Github, Linkedin, Twitter } from '../svgIcons/Icons';
// import Scroll from '../Scroll/Scroll.component';
import Button from '../button/Button.component';
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Dev from '../../public/images/dev.png';
import introStyles from './Intro.module.scss';

const Intro = () => {
  return (
    <div className={introStyles.intro} id='intro'>
      <div className={introStyles.introContainter}>
        <div className={introStyles.introContent}>
          <div className={introStyles.introGrid}>
            <div className={introStyles.introDetails}>
              <p className={introStyles.hello}>Hello, I'm</p>
              <p className={introStyles.name}>Ezenwa Chigozie</p>
              <p className={introStyles.jobDescription}>
                <span>{`<FrontendDeveloper affinity={ReactJs} />
          `}</span>
              </p>
              <div className={introStyles.cvHireMeBtn}>
                <Button
                  text={'DownLoad CV'}
                  backgroundColor={true}
                  type={false}
                  submitting
                />
                <Button
                  text={'Hire Me'}
                  backgroundColor={false}
                  type={false}
                  submitting
                  liveLink={''}
                  githubLink={''}
                />
              </div>
            </div>
            <div className={introStyles.introImageContainer}>
              <img
                src={Dev}
                alt='developer'
                className={introStyles.introImage}
              />
            </div>
          </div>
          {/* <div className={introStyles.scrollDown}>
            <Scroll icon={faArrowDown} text='Scroll Down' reverse={false} />
          </div> */}
        </div>

        <div className={introStyles.introSocials}>
          <div className={introStyles.arrow}></div>
          <a
            href='https://github.com/stonesilver'
            rel='noreferrer'
            target='_blank'
            className={introStyles.socialLinks}
          >
            <Github />
          </a>
          <a
            href='https://www.linkedin.com/in/chigozie-ezenwa-a82a7411a/'
            rel='noreferrer'
            target='_blank'
            className={introStyles.socialLinks}
          >
            <Linkedin />
          </a>
          <a
            href='https://twitter.com/sunnyside04'
            rel='noreferrer'
            target='_blank'
            className={introStyles.socialLinks}
          >
            <Twitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
