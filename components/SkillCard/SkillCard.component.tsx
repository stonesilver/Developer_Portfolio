import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import skillStyles from './SkillCard.module.scss';

const SkillCard = ({ icon, name }) => {
  return (
    <div className={skillStyles.skillCard}>
      <div className={skillStyles.icon}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={skillStyles.cardBody}>
        <span className={skillStyles.text}>{name}</span>
      </div>
    </div>
  );
};

export default SkillCard;
