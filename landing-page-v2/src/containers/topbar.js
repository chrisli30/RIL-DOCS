import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { cloudinaryConfig } from '../components/react-cloudinary';

import { getCurrentTheme } from './ThemeSwitcher/config';
import { themeConfig } from '../config';
import { landPageMenu } from '../config/constant';
import Button from '../components/Button';
import NavLink from '../components/Link';
const DocBtn = <Button href="https://www.rsk.co/" className="hideOnMobile" width="150px" height="40px" style={{ fontSize: '12px' }}>Documentation</Button>;
const menuOnDeskTop = landPageMenu.map((item, idx) => {
  if (idx < landPageMenu.length - 1) {
    return (<li key={`menu-list-${item.name}`} className="hideOnMobile">
      <NavLink link={item.link} target={item.ifOpenNewTab ? '_blank' : '_self'} content={item.name} />
    </li>);
  }
  return <li key={`menu-list-${item.name}`} className="hideOnMobile">{DocBtn}</li>;
});

const menuOnMobile = landPageMenu.map((item) => (
  <li key={`menu-list-${item.name}-mobile`} className="hideOnLarge">
    <NavLink link={item.link} content={item.name} />
  </li>
));

const { Header } = Layout;

cloudinaryConfig({ cloud_name: 'dd1ixvdxn' });

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
    const customizedTheme = getCurrentTheme('topbarTheme', themeConfig.theme);
    const {
      collapsed,
    } = this.state;

    const btnClassName = `triggerBtn  ${collapsed ? 'menuCollapsed' : 'menuOpen'}`;
    const menuClassName = `menu  ${collapsed ? 'menuCollapsed' : 'menuOpen'}`;

    return (
      <div className="topbar">
        <Header
          style={{ background: 'transparent' }}
          className={collapsed ? 'collapsed' : ''}
        >
          <div className="cancel-ant-layout-header">
            <div className="horizontalWrapper">
              <div className="topbarWrapper">
                <div className="isoLeft">
                  <div className="logo-container" style={{ marginTop: '-10px' }}>
                    <Link to="/">
                      <img height="78px" width="auto" src="https://files.readme.io/c8e016f-rsk1.png" alt="logo" />
                    </Link>
                  </div>
                </div>

                <ul className="isoRight">
                  <div className="hideOnLarge">
                    <button
                      className={btnClassName}
                      style={{ color: customizedTheme.textColor }}
                      onClick={this.toggleCollapsed}
                      data-toggle="collapse"
                      data-target="#bs-example-navbar-collapse-1"
                    >
                      <span className="icon-bar top-bar"></span>
                      <span className="icon-bar middle-bar"></span>
                      <span className="icon-bar bottom-bar"></span>
                    </button>

                  </div>
                  <div id="topBarMenuContainer">
                    { menuOnDeskTop }
                  </div>
                </ul>
              </div>
            </div>

            <div className={menuClassName} id="bs-example-navbar-collapse-1">
              <ul>
                { menuOnMobile }
              </ul>
            </div>

          </div>
        </Header>
      </div>
    );
  }
}

Topbar.propTypes = {
};

Topbar.defaultProps = {
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
