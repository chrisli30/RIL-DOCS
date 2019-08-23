import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

import { landPageMenu } from '../../config/constant';
import Link from '../Link';


const menuOnMobile = landPageMenu.map((item) => (
  <li key={`menu-list-${item.name}-mobile`} className="hideOnLarge">
    <Link link={item.link} content={item.name} />
  </li>
));

const Wrapper = styled.div`
    background-color: white;
    border: 1px solid #e7e7e7;
    height: auto;
    max-height: 340px;
    font-size: 14px;
    overflow: hidden;
    -webkit-transition: max-height .5s ease;
    -moz-transition: max-height .5s ease;
    -ms-transition: max-height .5s ease;
    -o-transition: max-height .5s ease;

    ul {
        display: flex;
        flex-direction: column;

        li {
            height: 4em;
            line-height: 4em;
            text-align: center;

            &:last-of-type {
                border-top: 1px solid #ddd;
            }
        }
    }

    a {
      color: ${(props) => props.theme.fontColor};
    }

    &.menuCollapsed {
        max-height: 0px;
        border: 0px;
    }
`;

function MenuOnMobile(props) {
  return (<Wrapper className={props.menuClassName} id="bs-example-navbar-collapse-1">
    <ul>{menuOnMobile}</ul>
  </Wrapper>);
}

MenuOnMobile.propTypes = {
  menuClassName: PropTypes.string.isRequired,
};
export default MenuOnMobile;
