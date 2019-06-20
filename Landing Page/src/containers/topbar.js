import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Menu, Dropdown, Icon, message, Button, Input, Row, Col, Tag } from 'antd';
import { cloudinaryConfig, CloudinaryImage, CloudinaryVideo } from '../components/react-cloudinary';

import { getCurrentTheme } from './ThemeSwitcher/config';
import { themeConfig } from '../config';
import { landPageMenu } from '../config/constant';
const menuOnDeskTop = landPageMenu.map((item) => (
  <li key={`menu-list-${item.name}`} className="hideOnMobile">
    <a href={item.link} alt={item.name}>{item.name}
    </a>
  </li>
));

const menuOnMobile = landPageMenu.map((item) => (
  <li key={`menu-list-${item.name}-mobile`} className="hideOnMobile">
    <a href={item.link} alt={item.name}>{item.name}</a>
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

  componentWillMount() {

  }

  componentWillReceiveProps(nextProps) {
  }

  toggleCollapsed() {
    console.log('toggle', this.state.collapsed);

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
                  <div className="logo-container" style={{ margin: '0px' }}>
                    <Link to="https://rsk-dev.readme.io/">
                      <img height="64px" width="auto" src="https://files.readme.io/c8e016f-rsk1.png" alt="logo" />
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
