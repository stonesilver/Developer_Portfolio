import SectionHeader from '../SectionHeader/SectionHeader.component';
import SkillCard from '../SkillCard/SkillCard.component';
import { skillsArray } from '../../utils/skillsArray';
import skillsStyles from './Skills.module.scss';

const Skills = () => {
  return (
    <div id={skillsStyles.skills}>
      <SectionHeader text='Skills' />
      <div className={skillsStyles.header}>
        <span className={skillsStyles.text}>My Arsenal of Skills</span>
      </div>
      <div className={skillsStyles.skillsRow}>
        {skillsArray.map(({ name, percentage, color }, index) => (
          <SkillCard
            key={index}
            color={color}
            name={name}
            percentage={percentage}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
