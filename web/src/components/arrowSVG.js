import * as React from "react"

function arrowSVG(props) {
  return (
    <span className="arrow">
      <svg className="arrow--svg" width={25} height={19} viewBox="0 0 67 52"  {...props}>
        <path className="arrow--path" d="M51 21H1v10h50L36 51h10l20-25L46 1H36l15 20z" />
      </svg>
    </span>
  )
}

export default arrowSVG;
