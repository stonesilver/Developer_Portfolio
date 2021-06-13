import { Developer, Github, Linkedin, Twitter } from '../svgIcons/Icons';
import introStyles from './Intro.module.scss';

const Intro = () => {
  return (
    <div className={introStyles.intro}>
      <div className={introStyles.introDetails}>
        <div className='hello'>Hello, I'm</div>
        <div className='name'>Ezenwa Chigozie</div>
        <div className='jobTitle'>
          I'm a frontend Developer who has an affinity for React Js
        </div>
        <div className='cvHireMeBtn'>
          <div className='cvBtn'>
            <p className='text'>Download CV</p>
          </div>
          <div className='hireMeBtn'>
            <p className='text'>Hire Me CV</p>
          </div>
        </div>
      </div>
      <div className={introStyles.introImage}>
        <Developer />
      </div>
      <div className={introStyles.introSocials}>
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
