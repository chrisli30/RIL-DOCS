import React from 'react';
import styled from 'styled-components';
import CollapseBtn from './CollapseBtn';
import MenuOnMobile from './MenuOnMobile';
import MenuOnDeskTop from './MenuOnDeskTop';
import HorizontalWrapper from './HorizontalWrapper';

import IsRight from './IsRight';
import IsLeft from './IsLeft';
import LogoContainer from './LogoContainer';


const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
  background-color: white;
  font-size: 16px;
  justify-content: space-between;
  @media ${(props) => props.theme.phone} {
      padding-left: 0px;
      padding-right: 0px;
      img {
        width: 120px;
      }
  }
  .topbarWrapper {
    font-size: 16px;
    display: flex;

    @media ${(props) => props.theme.tabletStrict} {
        margin-left: -20px;
        margin-right: -20px;
    }
}

`;


class Topbar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    };

    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const {
      collapsed,
    } = this.state;

    const btnClassName = `triggerBtn  ${collapsed ? 'menuCollapsed' : 'menuOpen'}`;
    const menuClassName = `menu  ${collapsed ? 'menuCollapsed' : 'menuOpen'}`;
    return (
      <Wrapper>
        <HorizontalWrapper>
          <IsLeft>
            <LogoContainer src="https://files.readme.io/c8e016f-rsk1.png" />
          </IsLeft>
          <IsRight>
            <CollapseBtn
              btnClassName={btnClassName}
              toggleCollapsed={this.toggleCollapsed}
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            />
            <MenuOnDeskTop />
          </IsRight>
        </HorizontalWrapper>
        <MenuOnMobile menuClassName={menuClassName} />
      </Wrapper>

    );
  }
}


export default Topbar;
