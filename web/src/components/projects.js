import React from 'react'

const project = (name, description) => (
  <div className="project">
    <h3 className="project--title">{name || 'no name'}</h3>
    <p className="project--description">{description || 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}</p>
    <a href="http://google.com" target="_blank" rel="noreferrer" className="project--link">Lorem</a>
  </div>
)

const projects = ({ projects }) => {

  const allProjects = projects.edges;

  return (
    <div className="cont">
      {console.log(allProjects)}
      <div className="projects">
        <div className="project--col-heading">
          <h2>Projects</h2>
        </div>
        <div className="projects--col-list">
          {allProjects.map(p => project(p.node.name, p.node.description))}
        </div>
      </div>
    </div>
  )
}


export default projects; 