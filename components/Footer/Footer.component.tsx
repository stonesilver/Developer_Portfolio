import Link from 'next/link';
import {
  faPhoneAlt,
  faMapMarker,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
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
            <span>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </span>

            <div className='info'>+234 0706 437 8577</div>
          </div>
          <div className={footerStyles.footerContactInfo}>
            <span>
              <FontAwesomeIcon icon={faMapMarker} />
            </span>

            <div className='info'>Lagos, Nigeria</div>
          </div>
          <div className={footerStyles.footerContactInfo}>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <div className={footerStyles.info}>ezenwachigozie12@gmail.com</div>
          </div>
        </div>
        <div className={footerStyles.footerLinks}>
          <ul className={footerStyles.footerLinksContainer}>
            <li className={footerStyles.footerLink}>
              <a href='#about'>About</a>
            </li>
            <li className={footerStyles.footerLink}>
              <a href='#skills'>Skills</a>
            </li>
            <li className={footerStyles.footerLink}>
              <a href='#projects'>Projects</a>
            </li>
            <li className={footerStyles.footerLink}>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={footerStyles.createdBy}>
        <span className={footerStyles.text}>
          Developed by <span>Ezenwa Chigozie</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
