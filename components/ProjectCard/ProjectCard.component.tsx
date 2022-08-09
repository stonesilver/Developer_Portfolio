import Button from '../button/Button.component';
import projectCardStyles from './ProjectCard.module.scss';
import Image from 'next/image';

interface projectCardProps {
  name: string;
  image: string;
  description: string;
  githubLink: string;
  liveLink: string;
}

const ProjectCard = ({
  name,
  image,
  description,
  githubLink,
  liveLink,
}: projectCardProps) => {
  return (
    <div className={projectCardStyles.ProjectCard} data-aos='flip-up'>
      <div className={projectCardStyles.ProjectCardImgContainter}>
        <Image src={image} alt='project' layout='fill' />
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
            liveLink={liveLink}
          />
          <Button
            text='View Code'
            backgroundColor={false}
            submitting
            type={false}
            githubLink={githubLink}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
