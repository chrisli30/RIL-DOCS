import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';


const Wrapper = styled.div`
  margin: '0px'
  a {
    display: block;
  }
  img {
    vertical-align: middle;
    height:78px;
    width:auto;
    margin-top:-10px;
  }
`;

function LogoContainer(props) {
  return (<Wrapper>
    <Link to="/">
      <img src={props.src} alt="logo" />
    </Link>
  </Wrapper>);
}

LogoContainer.propTypes = {
  src: PropTypes.string.isRequired,
};
export default LogoContainer;
