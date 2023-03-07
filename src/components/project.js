// import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// const Project = ({ project }) => {
//   const { id, title, deployedUrl, repoUrl, image } = project;
//   return (
//     <div>
//       <h3>{title}</h3>
//       <img src={image} alt={title} />
//       <p>
//         <a href={deployedUrl}>Deployed version</a> |{' '}
//         <a href={repoUrl}>GitHub repository</a>
//       </p>
//       <Link to={`/projects/${id}`}>Details</Link>
//     </div>
//   );
// };

// export default Project;

import React from 'react';

class Project extends React.Component {
  render() {
    const { title, deployedUrl, githubUrl, screenshotUrl } = this.props;
    return (
      <div className="project">
        <h2>{title}</h2>
        <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
          <img src={screenshotUrl} alt={title} />
        </a>
        <div className="links">
          <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
            Deployed Version
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
      </div>
    );
  }
}

export default Project;