import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import scrollStyles from './scroll.module.scss';

const Scroll = ({icon, text}) => {
  return (
    <div className={scrollStyles.scroll}>
      <div className={scrollStyles.iconContainer}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <p className={scrollStyles.text}>{text}</p>
    </div>
  );
};

export default Scroll;
