import styled from 'styled-components';
import { palette } from 'styled-theme';
import BaseStyles from '../../components/BaseStyle';


const AppHolder = styled.div`
  ${BaseStyles}
  body {
    font-size: 16px;
  }

a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
}

`;

export default AppHolder;
