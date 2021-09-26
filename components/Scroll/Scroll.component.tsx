import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import scrollStyles from './scroll.module.scss';

const Scroll = ({ icon, text, reverse }) => {
  return (
    <div className={scrollStyles.scroll}>
      <style jsx>
        {`
          flex-direction: ${reverse ? 'row-reverse' : 'row'};
        `}
      </style>
      <div
        className={scrollStyles.iconContainer}
        onClick={() => window.scrollTo(0, 0)}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      <p className={scrollStyles.text}>{text}</p>
    </div>
  );
};

export default Scroll;
