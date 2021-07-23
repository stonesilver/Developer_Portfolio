import { Developer, Github, Linkedin, Twitter } from '../svgIcons/Icons';
import Scroll from '../Scroll/Scroll.component';
import Button from '../button/Button.component';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Dev from '../../public/images/dev.png'
import introStyles from './Intro.module.scss';

const Intro = () => {
  return (
    <div className={introStyles.intro}>
      <div className={introStyles.introContent}>
        <div className={introStyles.introGrid}>
          <div className={introStyles.introDetails}>
            <p className={introStyles.hello}>Hello, I'm</p>
            <p className={introStyles.name}>Ezenwa Chigozie</p>
            <p className={introStyles.jobDescription}>
              <span>{`<FrontendDeveloper affinity={React Js} />
          `}</span>
            </p>
            <div className={introStyles.cvHireMeBtn}>
              <Button
                text={'DownLoad CV'}
                backgroundColor={true}
                type={false}
              />
              <Button text={'Hire Me'} backgroundColor={false} type={false} />
            </div>
          </div>
          <div className={introStyles.introImage}>
            {/* <Developer /> */}
            <img src={Dev} alt="developer"/>
          </div>
        </div>
        <div className={introStyles.scrollDown}>
          <Scroll icon={faArrowDown} text='Scroll Down' reverse={false} />
        </div>
      </div>

      <div className={introStyles.introSocials}>
        <div className={introStyles.arrow}></div>
        <span className={introStyles.socialLinks}>
          <Github />
        </span>
        <span className={introStyles.socialLinks}>
          <Linkedin />
        </span>
        <span className={introStyles.socialLinks}>
          <Twitter />
        </span>
      </div>
    </div>
  );
};

export default Intro;
