import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Layout, LocaleProvider } from 'antd';
import { IntlProvider } from 'react-intl';
import { Debounce } from 'react-throttle';
import { WindowResizeListener } from 'react-window-resize-listener';
import { ThemeProvider } from 'styled-components';
import appActions from '../../redux/app/actions';
import Topbar from '../topbar';
import AppRouter from './AppRouter';
import { AppLocale } from '../../index';
import themes from '../../config/themes';
import { themeConfig, siteConfig } from '../../config';
import AppHolder from './commonStyle';

const { Content, Footer } = Layout;
const { toggleAll } = appActions;

export class App extends React.PureComponent {
  render() {
    const { url } = this.props.match;
    const currentAppLocale = AppLocale.en;
    return (
      <LocaleProvider locale={currentAppLocale.antd}>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}
        >
          <ThemeProvider theme={themes[themeConfig.theme]}>
            <AppHolder>
              <Layout>
                <Debounce time="1000" handler="onResize">
                  <WindowResizeListener
                    onResize={(windowSize) =>
                      this.props.toggleAll(
                        windowSize.windowWidth,
                        windowSize.windowHeight
                      )}
                  />
                </Debounce>
                <Topbar url={url} />
                <Layout style={{ flexDirection: 'row', overflowX: 'hidden' }}>
                  <Layout
                    className="isoContentMainLayout"
                  >
                    <Content
                      className="isomorphicContent"
                      style={{
                        flexShrink: '0',
                        background: '#f9f9f9',
                      }}
                    >
                      <AppRouter url={url} />
                    </Content>
                    <Footer
                      style={{
                        background: '#ffffff',
                        textAlign: 'center',
                        borderTop: '1px solid #ededed',
                      }}
                    >
                      {siteConfig.footerText}
                    </Footer>
                  </Layout>
                </Layout>
              </Layout>
            </AppHolder>
          </ThemeProvider>
        </IntlProvider>
      </LocaleProvider>
    );
  }
}

App.propTypes = {
  toggleAll: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

export default connect(
  (state) => ({
    auth: state.Auth,
  }),
  { toggleAll }
)(App);
