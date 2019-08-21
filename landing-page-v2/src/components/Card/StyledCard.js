import styled from 'styled-components';

const StyledCard = styled.div`
  text-align: center;
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  border-radius: 12px;
  padding: 3em 3em;
  background-origin: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: ${(props) =>
    props.hasShadow
      ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
      : ''};
`;

export default StyledCard;
