
import React from 'react';
import PropTypes from 'prop-types';

import A from './A';

const Link = (props) => <A href={props.link} target={props.target}>{props.content}</A>;

Link.propTypes = {
  link: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  target: PropTypes.string,
};

Link.defaultProps = {
  target: '_blank',
};

export default Link;
