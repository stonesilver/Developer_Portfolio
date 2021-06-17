import SectionHeader from '../SectionHeader/SectionHeader.component';
import Button from '../button/Button.component';
import ProjectCard from '../ProjectCard/ProjectCard.component';
import projectStyles from './Projects.module.scss';

const Projects = () => {
  return (
    <div className={projectStyles.project}>
      <SectionHeader text='Projects' />
      <div className={projectStyles.projectsContainer}>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className={projectStyles.discoverMore}>
        <Button text='Discover More' backgroundColor={true} />
      </div>
    </div>
  );
};

export default Projects;
