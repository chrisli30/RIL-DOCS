/**
 *
 * Card.js
 *
 * A common Card
 */
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './StyledTitle';

function Title(props) {
  return (
    <StyledTitle {...props}>{Children.toArray(props.children)}</StyledTitle>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Title.defaultProps = {
  width: '',
  height: '',
};

export default Title;
