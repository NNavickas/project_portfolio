import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
  const { id, title, deployedUrl, repoUrl, image } = project;
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>
        <a href={deployedUrl}>Deployed version</a> |{' '}
        <a href={repoUrl}>GitHub repository</a>
      </p>
      <Link to={`/projects/${id}`}>Details</Link>
    </div>
  );
};

export default Project;