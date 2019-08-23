import styled from 'styled-components';

import buttonStyles from './buttonStyles';

const StyledA = styled.a`
  ${buttonStyles};
  vertical-align: middle;
  line-height: ${(props) => (props.height ? props.height : '')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  background-color: ${(props) => (props.isSolid ? props.theme.palette.text[5] : '#fff')};
  color: ${(props) => (props.isSolid ? '#fff' : props.theme.palette.text[5])};
  &:active {
    background: ${(props) => (props.isSolid ? '#fff' : props.theme.palette.text[5])};
    color: ${(props) => (props.isSolid ? props.theme.palette.text[5] : '#fff')};
  }
  box-shadow: ${(props) =>
    props.hasShadow
      ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      : ''};
`;

export default StyledA;
