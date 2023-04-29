import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { source, alternativeText } = this.props;
    return <img className="headerImg" src={ source } alt={ alternativeText } />;
  }
}

Image.propTypes = {
  source: PropTypes.string,
  alternativeText: PropTypes.string,
}.isRequired;

export default Image;
