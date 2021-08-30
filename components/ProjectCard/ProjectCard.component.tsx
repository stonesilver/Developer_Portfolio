import Button from '../button/Button.component';
import img from '../../public/images/test.png';
import projectCardStyles from './ProjectCard.module.scss';

const ProjectCard = () => {
  return (
    <div className={projectCardStyles.ProjectCard}>
      <div className={projectCardStyles.ProjectCardImgContainter}>
        <img src={img} alt='project' />
      </div>
      <div className={projectCardStyles.ProjectCardBody}>
        <p className={projectCardStyles.ProjectCardTitle}>
          Movie Database App
        </p>
        <p className={projectCardStyles.ProjectCardDescription}>
          This project is a fully responsive web application. The project uses TheMovieDB API to display movies/Tv series by genre, popular, upcoming, best rated etc. Users can also serach for movie, TV series or actors/actresses. It was built using React, SASS, bootstrap and  redux. 
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
