import SectionHeader from '../SectionHeader/SectionHeader.component';
import SkillCard from '../SkillCard/SkillCard.component';
import { skillsArray } from '../../utils/skillsArray';
import skillsStyles from './Skills.module.scss';

const Skills = () => {
  return (
    <div className={skillsStyles.skills} id='skills'>
      <SectionHeader text='Skills' info='My Arsenal of Skills' />
      <div className={skillsStyles.skillsRow}>
        {skillsArray.map(({ name, icon }, index) => (
          <SkillCard key={index} icon={icon} name={name} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
