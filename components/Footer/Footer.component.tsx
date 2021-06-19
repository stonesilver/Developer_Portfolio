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
          <span className={footerStyles.logo}>ESC</span>
        </div>
        <div className={footerStyles.footerContact}>
          <span className={footerStyles.footerContactInfo}>
            <FontAwesomeIcon icon={faPhoneAlt} />
          </span>
          <span className={footerStyles.footerContactInfo}>
            <FontAwesomeIcon icon={faMapMarker} />
          </span>
          <span className={footerStyles.footerContactInfo}>
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
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
    </div>
  );
};

export default Footer;
