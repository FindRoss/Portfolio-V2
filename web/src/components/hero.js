import React from "react";
import PropTypes from "prop-types";

const hero = ({ hero }) => (
  <div className="hero">
    {console.log(hero)}
    <div className="hero--content">
      <h1 className="hero--title">{hero.title || 'This is a placeholder'}</h1>
      <p className="hero--subtitle">{hero.description || 'This is the description and its awesome!'}</p>
    </div>
  </div>
);

export default hero;

hero.propTypes = {
  [hero.title]: PropTypes.string,
  [hero.description]: PropTypes.string,
}