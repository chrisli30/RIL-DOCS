/**
 *
 * Footer.js
 *
 * A common Footer
 */
import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import IsLeft from './IsLeft';
import IsRight from './IsRight';
import IconGroup from './IconGroup';
import Menu from './Menu';

function Footer(props) {
  const {
    style, Logo, FooterText, IconGroupItems, MenuItems,
  } = props;
  return (<Wrapper style={style}>
    <IsLeft>
      {Logo}
      {FooterText}
    </IsLeft>
    <IsRight>
      <IconGroup>{IconGroupItems}</IconGroup>
      <Menu>{MenuItems}</Menu>
    </IsRight>

  </Wrapper>);
}

Footer.propTypes = {
  style: PropTypes.object,
  Logo: PropTypes.node.isRequired,
  FooterText: PropTypes.node.isRequired,
  IconGroupItems: PropTypes.array.isRequired,
  MenuItems: PropTypes.array.isRequired,
};

Footer.defaultProps = {
  style: {},
};

export default Footer;
