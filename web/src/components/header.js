import PropTypes from "prop-types";
import React from "react";

import logo from "../assets/images/logo-plain.png";

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="cont">
      <div className="logo">
        <div className="logo--image">
          <img src={logo} width="45" height="45" alt="Ross Findlay portfolio" />
        </div>
        <div className="logo--title">
          <h1 className="header--title" style={{ margin: 0 }}>
            {siteTitle}
          </h1>
        </div>
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
