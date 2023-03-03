import React from 'react';
import Project from './project';
import projectData from '../data/projects.json';

const Projects = () => {
  return (
    <div>
      {projectData.map(project => (
        <project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;