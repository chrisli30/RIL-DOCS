/**
 *
 * ImagePie.js
 *
 * A common ImagePie
 */
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import StyledPie from './StyledPie';

function ImagePie(props) {
  return (
    <StyledPie {...props} style={props.style}>
      {Children.toArray(props.children)}
    </StyledPie>
  );
}

ImagePie.propTypes = {
  children: PropTypes.node,
  hasShadow: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  style: PropTypes.object,
  url: PropTypes.string,

};
ImagePie.defaultProps = {
  children: null,
  hasShadow: '',
  width: '',
  height: '',
  radius: '',
  url: '',
  style: {},
};


export default ImagePie;
