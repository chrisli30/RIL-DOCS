/**
 *
 * BasicInput.js
 *
 * Renders a basic input field
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

function BasicInput(props) {
  return <Input className={props.className} placeholder={props.placeholder} style={{ height: 40 }} size="large" />;
}
// We require the use of src and alt, only enforced by react in dev mode
BasicInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};
BasicInput.defaultProps = {
  className: '',
};
export default BasicInput;
