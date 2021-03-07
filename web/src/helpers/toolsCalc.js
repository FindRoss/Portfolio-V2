export const toolsCalc = () => {
  // Query Selector
  let allTools = document.querySelectorAll('.tool');
  let tool = document.querySelector('.tool');

  // Get the complete width of one of the elements. 
  let toolWidth = tool.clientWidth;
  let marginRight = parseInt(getComputedStyle(tool).marginRight);
  let marginLeft = parseInt(getComputedStyle(tool).marginLeft);
  let borderRight = parseInt(getComputedStyle(tool).borderRightWidth);
  let borderLeft = parseInt(getComputedStyle(tool).borderLeftWidth);

  let totalToolWidth = toolWidth + marginLeft + marginRight + borderLeft + borderRight;

  // Get the number of elements. 
  let cardNumber = allTools.length;
  // Calculate the maximum width of all tools, minus marginRight because the last element does not have margin right 
  let panelWidth = cardNumber * totalToolWidth;

  // Maximum panel width minus one of the tools.....?
  // let maxCheck = panelWidth - totalToolWidth;
  let maxCheck = panelWidth - 1;


  // // // need to know if this is on mobile or desktop before resizing begins.. 
  let panelsToMove = 1;
  let tabletBreakPoint = 768;

  // Get the size of the window..  
  const windowSize = window.innerWidth;

  if (windowSize > tabletBreakPoint) panelsToMove = 2;



  return {
    tools: allTools,
    totalWidth: totalToolWidth * panelsToMove,
    maxCheck
  }
}