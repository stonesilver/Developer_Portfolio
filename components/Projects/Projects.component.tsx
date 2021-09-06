import React, { useEffect } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader.component';
import Button from '../button/Button.component';
import ProjectCard from '../ProjectCard/ProjectCard.component';
import projectStyles from './Projects.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      mirror: true,
      offset: 30,
      easing: 'ease-in-cubic'
    });
  }, []);
  return (
    <div className={projectStyles.project} id='projects'>
      <SectionHeader text='Projects' info='Frontend Projects' />
      <div className={projectStyles.projectsContainer}>
        {[0, 1, 2, 3].map((item, index) => (
          <ProjectCard key={index} />
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
