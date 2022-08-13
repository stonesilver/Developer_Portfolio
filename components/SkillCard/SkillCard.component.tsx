import Image from 'next/image';
import skillStyles from './SkillCard.module.scss';

interface skillCardProps {
  iconSrc: string;
  name: string;
}

const SkillCard = ({ iconSrc, name }: skillCardProps) => {
  return (
    <div className={skillStyles.skillCard}>
      <div className={skillStyles.icon}>
        <Image width={500} height={500} src={iconSrc} />
      </div>
      <div className={skillStyles.cardBody}>
        <span className={skillStyles.text}>{name}</span>
      </div>
    </div>
  );
};

export default SkillCard;
