import styled from 'styled-components';
import React from 'react';

import { landPageMenu } from '../../config/constant';
import Button from '../Button';
import Link from '../Link';


const DocBtn = <Button href="https://www.rsk.co/" className="hideOnMobile" width="150px" height="40px" style={{ fontSize: '12px' }}>Documentation</Button>;
const menuOnDeskTop = landPageMenu.map((item, idx) => {
  if (idx < landPageMenu.length - 1) {
    return (<li key={`menu-list-${item.name}`}>
      <Link link={item.link} target={item.ifOpenNewTab ? '_blank' : '_self'} content={item.name} />
    </li>);
  }
  return <li key={`menu-list-${item.name}`}>{DocBtn}</li>;
});

const Wrapper = styled.div`
  @media ${(props) => props.theme.phone} {
    display: none !important;
  }
  li {
        position: relative;
        padding-left: 18px;
        padding-right: 18px;
        display: inline-block;

        @media ${(props) => props.theme.tableStrict}{
            padding-left: 8px;
            padding-right: 8px;
        }

        

        &:last-of-type{
          color:${(props) => props.theme.mainColor}
        }
        &:not(:last-of-type) {
          a {
            color:${(props) => props.theme.fontColor};

            i {
                padding-left: 6px;
                font-size: 16px;
            }
          }
            &:after {
                content: "";
                display: block;
                height: 3px;
                bottom: 0;
                background-color: white;
                position: absolute;
                left: 50%;
                transform:translateX(-50%);
                width: 0;
                -webkit-transition: width .5s ease, background-color .5s ease;
                -moz-transition: width .5s ease, background-color .5s ease;
                -ms-transition: width .5s ease, background-color .5s ease;
                -o-transition: width .5s ease, background-color .5s ease;
            }

            &:hover:after {
                background-color: ${(props) => props.theme.fontColor};
                width: 100%;
            }
        }
    }
`;

function MenuOnDeskTop() {
  return (<Wrapper>
    {menuOnDeskTop}
  </Wrapper>);
}

export default MenuOnDeskTop;
