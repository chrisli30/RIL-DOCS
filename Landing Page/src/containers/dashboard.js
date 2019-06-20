/* eslint react/no-array-index-key: 0, no-nested-ternary:0 */ // Disable "Do not use Array index in keys" for options since they dont have unique identifier

import React, { PropTypes } from 'react';
import { Form } from 'antd';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as Scroll from 'react-scroll';

import InfoSection from '../components/sections/info';
import LandPage from '../components/sections/landpage';

const FormItem = Form.Item;

const {
  Link, Element, Events, scroll, scrollSpy,
} = Scroll;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', (...rest) => {
      console.log('begin', rest);
    });

    Events.scrollEvent.register('end', (...rest) => {
      console.log('end', rest);
    });
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  // handleSetActive(to) {
  //   console.log(to);
  // }

  render() {
    const COL_PER_ROW = { // Specify how many col in each row
      xs: 1,
      sm: 3,
      md: 3,
      lg: 4,
      xl: 4,
      xxl: 4,
    };
    const ROW_GUTTER = {
      xs: 0,
      sm: 16, // Set gutter to 16 + 8 * n, with n being a natural number
      md: 24,
      lg: 24,
      xl: 32,
      xxl: 32,
    };

    // Calculate grid number for Col attribute
    const colWidth = {};

    Object.keys(COL_PER_ROW).forEach((key) => {
      colWidth[key] = 24 / COL_PER_ROW[key];
    });

    const videoOptions = {
      autoplay: true,
      preload: 'auto',
      loop: true,
      playbackRate: 0.5,
    };

    const videoRatio = 640 / 360;
    if (window.innerWidth / window.innerHeight > videoRatio) {
      videoOptions.width = '100%';
    } else {
      videoOptions.height = '100%';
    }


    return (
      <div>
        {/* <section style={{ height: '100vh' }}>
          <div className="head">

          </div>
        </section> */}
        <LandPage />
        <InfoSection />
      </div>
    );
  }
}

Dashboard.propTypes = {
};

Dashboard.defaultProps = {
};

const mapStateToProps = (state) => ({
});

function mapDispatchToProps(dispatch) {
  return {
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
