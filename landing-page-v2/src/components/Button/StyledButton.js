import styled from 'styled-components';
import buttonStyles from './buttonStyles';

const StyledButton = styled.button`
  ${buttonStyles};
  line-height: ${(props) => (props.height ? props.height : '')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  background-color: ${(props) => (props.isSolid ? props.theme.mainColor : '#fff')};
  color: ${(props) => (props.isSolid ? '#fff' : props.theme.mainColor)};
  &:active {
    background: ${(props) => (props.isSolid ? '#fff' : props.theme.mainColor)};
    color: ${(props) => (props.isSolid ? '#fff' : props.theme.mainColor)};
  }
  box-shadow: ${(props) =>
    props.hasShadow
      ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      : ''};
`;

export default StyledButton;
