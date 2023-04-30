import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
  render() {
    const { source, alternativeText } = this.props;
    return (
      <div>
        <img 
          className="footerImg" 
          src={ source } 
          alt={ alternativeText } 
        />
        <p className="box-footer">Page created with &#x1F499; by &copy; Josie Lima 2023</p>
      </div>
    )
  }
}

Footer.propTypes = {
  source: PropTypes.string,
  alternativeText: PropTypes.string,
}.isRequired;

export default Footer;