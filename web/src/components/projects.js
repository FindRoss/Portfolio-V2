import React from 'react';
import PropTypes from "prop-types";

const project = (p) => (
  <div className="project" key={p}>
    <h3 className="project--title">{p.name || 'no name'}</h3>
    <p className="project--description">{p.description || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}</p>
    <a href="http://google.com" target="_blank" rel="noreferrer" className="project--link">Lorem</a>
  </div>
)

const Projects = ({ projects: { edges: allProjects } }) => {

  // Learning destructuring.
  // const allProjects = projects.edges;
  // const { edges: allProjects } = projects;
  // { projects: { edges: allProjects  } }

  return (
    <div className="cont">
      <div className="projects">
        <div className="project--col-heading">
          <h2>Projects</h2>
        </div>
        <div className="projects--col-list">
          {allProjects.map(p => project(p.node))}
        </div>
      </div>
    </div>
  )
}

export default Projects;

Projects.propTypes = {
  projects: PropTypes.shape({
    edges: PropTypes.array
  })
}