

import styled from 'styled-components';

const Link = styled.a`
  color: ${(props) => (props.color ? props.color : '#9dafbd')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '12px')};
  &:hover {
    color: ${(props) => (props.hoverColor ? props.hoverColor : '#55bca6')};
  };
  vertical-align:middle;

`;

export default Link;
