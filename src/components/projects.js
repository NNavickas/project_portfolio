// import React from 'react';
// import Project from './project';
// import projectData from '../data/projects.json';

// const Projects = () => {
//   return (
//     <div>
//       {projectData.map(project => (
//         <project key={project.id} project={project} />
//       ))}
//     </div>
//   );
// };

// export default Projects;

import React from 'react';
import Project from './project';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    // Fetch projects data from JSON file and update state
    fetch('projectsData.json')
      .then(response => response.json())
      .then(data => this.setState({ projects: data }));
  }

  render() {
    return (
      <div>
        <h1>Projects</h1>
        <div className="project-list">
          {this.state.projects.map(project => (
            <Project
              key={project.id}
              title={project.title}
              deployedUrl={project.deployedUrl}
              githubUrl={project.githubUrl}
              screenshotUrl={project.screenshotUrl}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
