import PropTypes from "prop-types";
import React from "react";

import LogoSVG from './logoSVG';

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="cont">
      <div className="logo">
        <div className="logo--image">
          <LogoSVG />
        </div>
        <h1 className="logo--title">
          {siteTitle}
        </h1>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

// I dont think this is doing anything?
// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
