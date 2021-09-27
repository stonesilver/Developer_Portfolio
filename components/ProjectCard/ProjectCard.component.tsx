import Button from '../button/Button.component';
// import img from '../../public/images/movieDataBase.png';
import projectCardStyles from './ProjectCard.module.scss';

const ProjectCard = ({name, image, description}) => {
  return (
    <div className={projectCardStyles.ProjectCard} data-aos='fade-left'>
      <div className={projectCardStyles.ProjectCardImgContainter}>
        <img src={image} alt='project' />
      </div>
      <div className={projectCardStyles.ProjectCardBody}>
        <p className={projectCardStyles.ProjectCardTitle}>{name}</p>
        <p className={projectCardStyles.ProjectCardDescription}>
          {description}
        </p>
        <div className={projectCardStyles.btns}>
          <Button
            text='View Live'
            backgroundColor={false}
            submitting
            type={false}
          />
          <Button
            text='View Code'
            backgroundColor={false}
            submitting
            type={false}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
