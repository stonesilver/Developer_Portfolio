// import Link from 'next/link';
import { Link, animateScroll as scroll } from 'react-scroll';
import {
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import footerStyles from './Footer.module.scss';

const footerContact = [
  { src: '/svg/mail.svg', type: 'mailto:' },
  { src: '/svg/phone.svg', type: 'tel' },
  ,
  { src: '/svg/whatsapp.svg', type: null },
];

const Footer = () => {
  const duration = () => {
    return window.innerWidth <= 768 ? 1000 : 600;
  };

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
          {[0, 1, 2].map((item) => (
            <a
              key={item}
              href='tel:07064378577'
              className={footerStyles.footerContactInfo}
            >
              <span className={footerStyles.footerIcon}>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>

              <span className={footerStyles.contactLabel}>
                +234 0706 437 8577
              </span>
            </a>
          ))}
          {/* <div className={footerStyles.footerContactInfo}>
            <span>
              <FontAwesomeIcon icon={faMapMarker} />
            </span>

            <span className='info'>Lagos, Nigeria</span>
          </div>
          <div className={footerStyles.footerContactInfo}>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <span className={footerStyles.info}>
              ezenwachigozie12@gmail.com
            </span>
          </div> */}
        </div>
        <div className={footerStyles.footerLinks}>
          <ul className={footerStyles.footerLinksContainer}>
            <li className={footerStyles.footerLink}>
              <Link to='about' smooth={true} duration={duration}>
                About
              </Link>
            </li>
            <li className={footerStyles.footerLink}>
              <Link to='skills' smooth={true} duration={duration}>
                Skills
              </Link>
            </li>
            <li className={footerStyles.footerLink}>
              <Link to='projects' smooth={true} duration={duration}>
                Projects
              </Link>
            </li>
            <li className={footerStyles.footerLink}>
              <Link to='contact' smooth={true} duration={duration}>
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
