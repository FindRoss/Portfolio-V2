import * as React from "react"

function LogoSVG(props) {
  return (
    <svg width={30} height={34} viewBox="0 0 496 550" fill="none" {...props}>
      <path fill="#F4D03B" stroke="#000" strokeWidth={10} d="M5 5H175V545H5z" />
      <circle
        cx={358.5}
        cy={137.5}
        r={132.5}
        fill="#F4D03B"
        stroke="#000"
        strokeWidth={10}
      />
    </svg>

    // <svg
    //   width={30}
    //   height={34}
    //   viewBox="0 0 552 550"
    //   // fill="#F4D03B"
    //   // stroke="#000"
    //   xmlns="http://www.w3.org/2000/svg"
    //   {...props}
    // >
    //   <path
    //     fill="#F4D03B"
    //     stroke="#000"
    //     strokeWidth={25}
    //     d="M12.5 12.5h155v525h-155z"
    //   />
    //   <circle
    //     cx={414.5}
    //     cy={137.5}
    //     r={125}
    //     fill="#F4D03B"
    //     stroke="#000"
    //     strokeWidth={25}
    //   />
    // </svg>
  )
}

export default LogoSVG
