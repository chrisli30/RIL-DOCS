/**
 *
 * Card.js
 *
 * A common Card
 */
import React, { Children } from 'react';
import PropTypes from 'prop-types';
import StyledCard from './StyledCard';

function Card(props) {
  return (
    <StyledCard {...props} style={props.style}>
      {Children.toArray(props.children)}
    </StyledCard>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  hasShadow: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
};

export default Card;
