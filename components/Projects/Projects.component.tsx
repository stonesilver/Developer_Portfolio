import SectionHeader from '../SectionHeader/SectionHeader.component';
import Button from '../button/Button.component';
import ProjectCard from '../ProjectCard/ProjectCard.component';
import { projects } from '../../utils/projectData';
import projectStyles from './Projects.module.scss';

const Projects = () => {
  return (
    <div className={projectStyles.project} id='projects'>
      <SectionHeader text='Projects' info='Frontend Projects' />
      <div className={projectStyles.projectsContainer}>
        {projects.map(({ id, name, image, description }) => (
          <ProjectCard
            key={id}
            name={name}
            image={image}
            description={description}
          />
        ))}
      </div>
      <div className={projectStyles.discoverMore}>
        <Button
          text='Discover More'
          backgroundColor={true}
          submitting
          type={false}
        />
      </div>
    </div>
  );
};

export default Projects;
