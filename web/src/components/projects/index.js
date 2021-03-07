import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

const Projects = ({ projects: { edges: allProjects } }) => {
  return (
    <section className="projects cont">
      <h2>Projects</h2>
      <div className="projects--list">
        {allProjects.map(p => <Project project={p.node} key={p.node.id} />)}
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