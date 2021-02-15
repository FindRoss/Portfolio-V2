import React from 'react'

function Tool({ data: { node: tool } }) {

  return (
    <div className="tool">
      <div className="tool--header">
        {tool.logo && (
          <img className="tool--header__image" width="35" height="auto" alt={tool.title} src={tool.logo.asset.url} />)}
        <h2 className="tool--header__title">{tool.title}</h2>
      </div>
      <p className="tool--description">{tool.description}</p>
    </div>
  )
}

export default Tool
