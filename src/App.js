// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;

// Import necessary libraries and components
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Project from './components/Project';
import Contact from './components/Contact';

// Define project data as a JSON file
const projectData = [
  {
    id: 1,
    title: 'Project 1',
    deployedLink: 'https://example.com/project1',
    githubLink: 'https://github.com/user/project1',
    screenshot: 'https://example.com/project1-screenshot.gif',
  },
  {
    id: 2,
    title: 'Project 2',
    deployedLink: 'https://example.com/project2',
    githubLink: 'https://github.com/user/project2',
    screenshot: 'https://example.com/project2-screenshot.gif',
  },
  // Add more projects as necessary
];

// Define App component
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projects/:id" component={Project} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

// Define Header component
function Header() {
  return (
    <nav>
      {/* Navbar */}
    </nav>
  );
}

// Define Home component
function Home() {
  return (
    <div>
      {/* Your Name */}
      {/* Headshot or avatar */}
      {/* Brand statement */}
      {/* Indication that this is your portfolio site */}
    </div>
  );
}

// Define Projects component
function Projects() {
  return (
    <div>
      {projectData.map((project) => (
        <ProjectSummary key={project.id} project={project} />
      ))}
    </div>
  );
}

// Define ProjectSummary component
function ProjectSummary({ project }) {
  return (
    <div>
      <h2>{project.title}</h2>
      <img src={project.screenshot} alt={project.title} />
      <p><a href={project.deployedLink}>Deployed Version</a></p>
      <p><a href={project.githubLink}>GitHub Repository</a></p>
    </div>
  );
}

// Define Project component
function Project({ match }) {
  const projectId = match.params.id;
  const project = projectData.find((project) => project.id == projectId);

  return (
    <div>
      <h2>{project.title}</h2>
      <img src={project.screenshot} alt={project.title} />
      <p><a href={project.deployedLink}>Deployed Version</a></p>
      <p><a href={project.githubLink}>GitHub Repository</a></p>
    </div>
  );
}

// Define Contact component
function Contact() {
  return (
    <div>
      {/* Email address */}
      {/* Link to PDF version of CV */}
      {/* Link to GitHub profile */}
      {/* Link to LinkedIn page */}
      {/* Contact form */}
    </div>
  );
}

// Export App component
export default App;

