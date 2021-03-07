import React from 'react'
import Tool from './tool';
import Arrow from '../arrowSVG';
import { toolsCalc } from '../../helpers/toolsCalc';

function Tools({ tools: { edges: tools } }) {

  let currentPosition = 0;

  const handleArrowRight = () => {
    const { tools, totalWidth, maxCheck } = toolsCalc();

    currentPosition -= totalWidth;

    if ((currentPosition) < -maxCheck) {
      currentPosition = 0;
    }

    if (currentPosition < -maxCheck) {
      currentPosition += totalWidth;
      return;
    };

    tools.forEach((t) => t.style.transform = `translateX(${currentPosition}px)`);
  }

  const handleArrowLeft = () => {
    const { tools, totalWidth } = toolsCalc();

    currentPosition += totalWidth;

    if (currentPosition > 0) {
      currentPosition -= totalWidth;
      return;
    };

    tools.forEach((t) => t.style.transform = `translateX(${currentPosition}px)`)
    tools.forEach((t) => t.style.webkitTransform = `translateX(${currentPosition}px)`)
    tools.forEach((t) => t.style.MozTransform = `translateX(${currentPosition}px)`)
    tools.forEach((t) => t.style.msTransform = `translateX(${currentPosition}px)`)
    tools.forEach((t) => t.style.oTransform = `translateX(${currentPosition}px)`)
  };

  return (
    <section className="cont">
      <div className="tools">
        <div className="tools--header">
          <h2>Tools</h2>
          <div className="tools--control">
            <button
              className="tools--control__btn left"
              onClick={handleArrowLeft}>
              <Arrow />
            </button>
            <button
              className="tools--control__btn right"
              onClick={handleArrowRight}>
              <Arrow />
            </button>
          </div>
        </div>
        <div className="tools--panel">
          {tools.map(tool => (
            <Tool data={tool} key={tool.node.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
