import React, { useState } from 'react'

import Arrow from './arrowSVG';

function Tools({ tools: { edges: tools } }) {
  const [fullLeft, setFullLeft] = useState(false);
  const [fullRight, setFullRight] = useState(false);

  let currentPosition = 0;

  const toolsCalc = () => {
    // Query Selector
    let allTools = document.querySelectorAll('.tool');
    let tool = document.querySelector('.tool');

    // Get the complete width of one of the elements. 
    let toolWidth = tool.clientWidth;
    let marginRight = parseInt(getComputedStyle(tool).marginRight);
    let marginLeft = parseInt(getComputedStyle(tool).marginLeft);
    let borderRight = parseInt(getComputedStyle(tool).borderRight);
    let borderLeft = parseInt(getComputedStyle(tool).borderLeft);
    let totalToolWidth = toolWidth + marginLeft + marginRight + borderLeft + borderRight;


    // Get the number of elements. 
    let cardNumber = allTools.length;
    // Calculate the maximum width of all tools, minus marginRight because the last element does not have margin right 
    let panelWidth = cardNumber * totalToolWidth;

    // Maximum panel width minus one of the tools.....?
    // let maxCheck = panelWidth - totalToolWidth;
    let maxCheck = panelWidth - 1;

    // The check will change depending on how many cards can fit on the screen. 
    // tools--panel width
    // let contWidth = document.querySelector('.tools--panel').clientWidth;
    // Total number of cards that can appear on the screen at any time. 
    // let maxCards = Math.floor(contWidth / totalToolWidth);
    // let maxCardsWidth = maxCards * totalToolWidth;
    // let adjustedMaxCheck = maxCheck - maxCardsWidth;


    // can do it with numbers.... 
    // interesting to try. 


    return {
      tools: allTools,
      totalWidth: totalToolWidth * 2,
      maxCheck
    }
  }

  const handleArrowRight = () => {
    const { tools, totalWidth, maxCheck } = toolsCalc();

    setFullLeft(false);

    currentPosition -= totalWidth;

    // console.log("currentPosition", currentPosition);
    // console.log("totalWidth", totalWidth); // 628 
    // if (currentPosition < (totalWidth - 1)) {
    //   setFullLeft(false);
    // }

    // when to hide the full right arrow
    // if (currentPosition === (-maxCheck + totalWidth - 1)) {
    //   setFullRight(true);
    // }

    if (currentPosition < -maxCheck) {
      currentPosition += totalWidth;
      return;
    };

    tools.forEach((t) => t.style.transform = `translateX(${currentPosition}px)`)
  }

  const handleArrowLeft = () => {
    const { tools, totalWidth } = toolsCalc();


    console.log(currentPosition, totalWidth);

    currentPosition += totalWidth;
    if (currentPosition > 0) {
      currentPosition -= totalWidth;
      console.log('returning....')
      return;
    };

    tools.forEach((t) => t.style.transform = `translateX(${currentPosition}px)`)
  };

  return (
    <div className="cont">
      <div className="tools">
        <div>
          <h2>Tools</h2>
        </div>
        <div className="tools--control">
          {!fullLeft && (
            <button className="tools--control__btn left" onClick={handleArrowLeft}>
              <Arrow />
            </button>
          )}
          {!fullRight && (
            <button className="tools--control__btn right" onClick={handleArrowRight}>
              <Arrow />
            </button>
          )}
        </div>
        <div className="tools--panel">
          {tools.map(tool => (
            <div className="tool" key={tool.node.id}>
              {tool.node.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tools
