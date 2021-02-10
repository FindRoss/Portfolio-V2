import React from 'react';
import PropTypes from 'prop-types';

import Arrow from './arrowSVG';

const project = (p) => (
  <div className="project" key={p.id}>
    <h3 className="project--title">{p.name || 'no name'}</h3>
    <p className="project--description">{p.description || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}</p>
    <div className="project--link">
      <a href={p.projectUrl || '#'} target="_blank" rel="noreferrer">
        <Arrow />
      </a>
    </div>
  </div>
)

const Projects = ({ projects: { edges: allProjects } }) => {

  // Learning destructuring.
  // const allProjects = projects.edges;
  // const { edges: allProjects } = projects;
  // { projects: { edges: allProjects  } }

  console.log(allProjects);

  return (
    <section className="projects cont">
      <div className="projects--title">
        <h2>Projects</h2>
      </div>
      <div className="projects--list">
        {allProjects.map(p => project(p.node))}
      </div>
    </section>
  )
}

export default Projects;

Projects.propTypes = {
  projects: PropTypes.shape({
    edges: PropTypes.array
  })
}