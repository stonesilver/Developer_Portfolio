// import Link from 'next/link';
import { Link, animateScroll as scroll } from 'react-scroll';
import {
  faPhoneAlt,
  faMapMarker,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import footerStyles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={footerStyles.footer} id='footer'>
      <div className={footerStyles.footerContent}>
        <div className={footerStyles.logoContainer}>
          <span
            className={footerStyles.logo}
            onClick={() => scroll.scrollToTop()}
          >
            {`<ESC/>`}
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
              <Link to='about' smooth={true} duration={600}>
                About
              </Link>
            </li>
            <li className={footerStyles.footerLink}>
              <Link to='skills' smooth={true} duration={600}>
                Skills
              </Link>
            </li>
            <li className={footerStyles.footerLink}>
              <Link to='projects' smooth={true} duration={600}>
                Projects
              </Link>
            </li>
            <li className={footerStyles.footerLink}>
              <Link to='contact' smooth={true} duration={600}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={footerStyles.createdBy}>
        <span className={footerStyles.text}>
          👨‍ Developed by <span>Ezenwa Chigozie</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
