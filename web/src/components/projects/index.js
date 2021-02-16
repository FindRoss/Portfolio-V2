import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';




const Projects = ({ projects: { edges: allProjects } }) => {
  return (
    <section className="projects cont">
      <div className="projects--title">
        <h2 className="section-heading">Projects</h2>
      </div>
      <div className="projects--list">
        {allProjects.map(p => <Project project={p.node} />)}
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