import SectionHeader from '../SectionHeader/SectionHeader.component';
import Button from '../button/Button.component';
import ProjectCard from '../ProjectCard/ProjectCard.component';
import projectStyles from './Projects.module.scss';

const Projects = () => {
  return (
    <div className={projectStyles.project}>
      <SectionHeader text='Projects' info='Frontend Projects' />
      <div className={projectStyles.projectsContainer}>
        {[0, 1, 2, 3].map((item, index) => (
          <ProjectCard key={index}/>
        ))}
      </div>
      <div className={projectStyles.discoverMore}>
        <Button text='Discover More' backgroundColor={true} type={false} />
      </div>
    </div>
  );
};

export default Projects;
