import Link from 'next/link';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import footerStyles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
      <div className={footerStyles.footerContent}>
        <div className={footerStyles.logoContainer}>
          <span className={footerStyles.logo}>
            <Link href='/'>{`<ESC/>`}</Link>
          </span>
        </div>
        <div className={footerStyles.footerContact}>
          <div className={footerStyles.footerContactInfo}>
            <FontAwesomeIcon icon={faPhoneAlt} />
            <span className='info'>+234 0706 437 8577</span>
          </div>
          <div className={footerStyles.footerContactInfo}>
            <FontAwesomeIcon icon={faMapMarker} />
            <span className='info'>Lagos, Nigeria</span>
          </div>
          <div className={footerStyles.footerContactInfo}>
            <FontAwesomeIcon icon={faEnvelope} />
            <span className='info'>ezenwachigozie12@gmail.com</span>
          </div>
        </div>
        <div className={footerStyles.footerLinks}>
          <ul className={footerStyles.footerLinksContainer}>
            <li className={footerStyles.footerLink}>
              <a href='#about'>About</a>
            </li>
            <li className='footerLink'>
              <a href='#skills'>Skills</a>
            </li>
            <li className='footerLink'>
              <a href='#projects'>Projects</a>
            </li>
            <li className='footerLink'>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className='createdBy'>
        <span className='text'>
          Developed by <span>Ezenwa Chigozie</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
