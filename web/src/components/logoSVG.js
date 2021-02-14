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
  )
}

export default LogoSVG
