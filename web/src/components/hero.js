import React from "react";
import PropTypes from "prop-types";

const Hero = ({ hero }) => (
  <section className="hero">
    <div className="hero--content">
      <h1 className="hero--title">{hero.title || 'This is a placeholder'}</h1>
      <p className="hero--subtitle">{hero.description || 'This is the description and its awesome!'}</p>
    </div>
  </section>
);

export default Hero;

Hero.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
}