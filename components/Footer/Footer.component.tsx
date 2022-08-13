import Image from 'next/image';
import { animateScroll as scroll } from 'react-scroll';
import footerStyles from './Footer.module.scss';
import { footerContact } from '../../utils/footerContact';

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
          {footerContact.map(({ svgSrc, text, href }) => (
            <a
              key={text}
              href={href}
              target='_blank'
              className={footerStyles.footerContactInfo}
            >
              <div className={footerStyles.footerIcon}>
                <Image src={svgSrc} layout='fill' alt={text} />
              </div>

              <p className={footerStyles.contactLabel}>{text}</p>
            </a>
          ))}
        </div>
        <div className={footerStyles.footerLinks}>
          <ul className={footerStyles.footerLinksContainer}>
            <li className={footerStyles.footerLink}>Create.</li>
            <li className={footerStyles.footerLink}>Design.</li>
            <li className={footerStyles.footerLink}>Code.</li>
            <li className={footerStyles.footerLink}>Build.</li>
            <li className={footerStyles.footerLink}>For everyone</li>
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
