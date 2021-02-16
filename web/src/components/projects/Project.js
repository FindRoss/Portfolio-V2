import React from 'react'
import Arrow from '../arrowSVG';

function Project({ project }) {
  return (
    <div className="project" key={project.id}>
      <h3 className="project--title">{project.name || 'no name'}</h3>
      <p className="project--description">{project.description || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}</p>
      <div className="project--link">
        <a href={project.projectUrl || '#'} target="_blank" rel="noreferrer">
          <Arrow />
        </a>
      </div>
    </div>
  )
}

export default Project;
