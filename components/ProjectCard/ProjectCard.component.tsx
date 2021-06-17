import Image from 'next/image';
import img from '../../movieDatabase.jpg';
import projectCardStyles from './ProjectCard.module.scss';

const ProjectCard = () => {
  return (
    <div className={projectCardStyles.ProjectCard}>
      <div className={projectCardStyles.ProjectCardImgContainter}>
        <img src={img} alt='project' />
      </div>
      <div className={projectCardStyles.ProjectCardBody}>
        <span className={projectCardStyles.ProjectCardTitle}>
          Movie DataBase Application
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
