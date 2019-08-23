/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';
import StyledA from './StyledA';

function Button(props) {
  // Render an anchor tag
  let button = (
    <StyledA
      isSolid={props.isSolid}
      hasShadow={props.hasShadow}
      onClick={props.onClick}
      href={props.href}
      height={props.height}
      width={props.width}
      style={props.style}
    >
      {Children.toArray(props.children)}
    </StyledA>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <StyledButton
        isSolid={props.isSolid}
        hasShadow={props.hasShadow}
        href={props.href}
        onClick={props.handleRoute}
        height={props.height}
        width={props.width}
        style={props.style}
      >
        {Children.toArray(props.children)}
      </StyledButton>
    );
  }

  return button;
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  isSolid: PropTypes.bool,
  hasShadow: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default Button;
