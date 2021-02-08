import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="cont">
      <h1 className="header--title" style={{ margin: 0 }}>
        {siteTitle}
      </h1>
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
