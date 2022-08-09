import { useState, useEffect, useRef } from 'react';
import { socials } from '../../utils/socials';
import Button from '../button/Button.component';
import Image from 'next/image';
import introStyles from './Intro.module.scss';

const Intro = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    setImageHeight(ref.current!.clientWidth);

    window.addEventListener('resize', () => {
      setImageHeight(ref.current!.clientWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setImageHeight(ref.current!.clientWidth);
      });
    };
  }, [imageHeight]);

  return (
    <div className={introStyles.intro} id='intro'>
      <div className={introStyles.introContainter}>
        <div className={introStyles.introContent}>
          <div className={introStyles.introGrid}>
            <div className={introStyles.introDetails}>
              <p className={introStyles.hello}>Hello, I'm</p>
              <p className={introStyles.name}>Ezenwa Chigozie</p>
              <p className={introStyles.jobDescription}>
                {`<FrontendDeveloper />`}
              </p>
              <div className={introStyles.cvHireMeBtn}>
                <Button
                  text='DownLoad CV'
                  backgroundColor={true}
                  type={false}
                  submitting
                />
                <Button
                  text='Hire Me'
                  backgroundColor={false}
                  type={false}
                  submitting
                  liveLink=''
                  githubLink=''
                />
              </div>
            </div>
            <div
              ref={ref}
              className={introStyles.developerImg}
              style={{ height: imageHeight }}
            >
              <div className={introStyles.imgContainer}>
                <Image
                  src='/images/dev.webp'
                  alt='developer'
                  className={introStyles.introImage}
                  layout='fill'
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className={introStyles.introSocials}>
          <div className={introStyles.arrow}></div>
          {socials.map(({ href, icon }) => (
            <a
              key={href}
              href={href}
              rel='noreferrer'
              target='_blank'
              className={introStyles.socialLinks}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
