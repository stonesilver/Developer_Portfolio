import Button from '../button/Button.component';
import projectCardStyles from './ProjectCard.module.scss';

interface projectCardProps {
  name: string;
   image: string;
   description: string;
   githubLink: string;
   liveLink: string;
}

const ProjectCard = ({name, image, description, githubLink, liveLink}: projectCardProps) => {
  return (
    <div className={projectCardStyles.ProjectCard} data-aos='flip-up'>
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
            githubLink={''}
            liveLink={liveLink}
          />
          <Button
            text='View Code'
            backgroundColor={false}
            submitting
            type={false}
            githubLink={githubLink}
            liveLink={''}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
