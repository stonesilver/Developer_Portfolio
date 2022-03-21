import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animateScroll as scroll } from 'react-scroll';
import scrollStyles from './scroll.module.scss';

interface scrollProps {
  icon: IconDefinition;
   text: string;
   reverse: boolean;
}

const Scroll = ({ icon, text, reverse }: scrollProps) => {
  return (
    <div className={scrollStyles.scroll}>
      <style jsx>
        {`
          flex-direction: ${reverse ? 'row-reverse' : 'row'};
        `}
      </style>
      <div
        className={scrollStyles.iconContainer}
        onClick={() => scroll.scrollToTop()}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
      <p className={scrollStyles.text}>{text}</p>
    </div>
  );
};

export default Scroll;
