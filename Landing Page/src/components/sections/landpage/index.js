import React, { PropTypes } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../scrollReveal';
import { subListArray, artistList, artistDetailList } from '../../../config/constant';
import { cloudinaryConfig } from '../../react-cloudinary';
cloudinaryConfig({ cloud_name: 'dd1ixvdxn' });

const artistIconArray = [
  <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
    <path
      fill="#000000"
      d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"
    />
  </svg>,
  <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
    <path
      fill="#000000"
      d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
    />
  </svg>,
  <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
    <path
      fill="#000000"
      d="M18,15H16V17H18M18,11H16V13H18M20,19H12V17H14V15H12V13H14V11H12V9H20M10,7H8V5H10M10,11H8V9H10M10,15H8V13H10M10,19H8V17H10M6,7H4V5H6M6,11H4V9H6M6,15H4V13H6M6,19H4V17H6M12,7V3H2V21H22V7H12Z"
    />
  </svg>,
  <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
    <path
      fill="#000000"
      d="M17.45,15.18L22,7.31V19L22,21H2V3H4V15.54L9.5,6L16,9.78L20.24,2.45L21.97,3.45L16.74,12.5L10.23,8.75L4.31,19H6.57L10.96,11.44L17.45,15.18Z"
    />
  </svg>,
  <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
    <path fill="#000000" d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" />
  </svg>,
];

const categoryListArea = subListArray.map((item) => (
  <div className="sub-header-list" key={`sub-list-category-${item.category}`}>
    <h4>
      {item.category}
    </h4>
    <ul>
      {
        item.details.map((detail) => (
          <a href={detail.link}><li className key={`getting-start-list-${detail.name}`}><span>{detail.name}</span></li></a>
        ))
      }
    </ul>
  </div>
));

class MissionSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      artistIdx: 0,
    };
  }
  /**
   * Add event listener
   */
  componentDidMount() {
    // Slide in from right distanct offset
    const isSmall = window.innerWidth < 640;
    const offset = isSmall ? 30 : 40;

    // SlideIn from right
    ScrollReveal.reveal(this.para1, _.extend({
      origin: 'right',
      duration: 1000,
      delay: isSmall ? 0 : 300,
      distance: '0px',
      scale: 1,
      easing: 'ease',
    }, { distance: `${offset * 2}px` }));

    ScrollReveal.reveal(this.para2, _.extend({
      origin: 'bottom',
      duration: 1000,
      delay: isSmall ? 0 : 300,
      distance: '0px',
      scale: 1,
      easing: 'ease',
    }, { distance: `${offset * 2}px` }));

    ScrollReveal.reveal(this.para3, _.extend({
      origin: 'bottom',
      duration: 1000,
      delay: isSmall ? 0 : 300 * 2,
      distance: '0px',
      scale: 1,
      easing: 'ease',
    }, { distance: `${offset * 2}px` }));
  }

  render() {
    const { artistIdx } = this.state;
    return (
      <section>
        <div className="inner-page">
          <div className="header">
            <div className="header-content">
              <h1 className="light" >RSK + RIFOS for developers</h1>
              <h1 className="light padding-bottom" >Build the next big thing</h1>
              <div className="header-slogan">
                <span>ON BITCOIN</span>
              </div>
              <div className="header-details">
                <span>
                We make it <strong>simple</strong> to launch, test and scale up your applications on top of the most <strong>secure</strong> blockchain. All in <strong>one place</strong>.
                </span>
              </div>
            </div>
            <div className="header-btn-box">
              <a href="https://rsk-dev.readme.io/docs/set-up-a-node" target="_self" className="btn-light btn-header">NODE SETUP</a>
              <a href="https://rsk-dev.readme.io/docs/connect-rsk-with-wallet" target="_self" className="btn-default btn-header">WALLET SETUP</a>
              <a href="https://rsk-dev.readme.io/docs/rns" target="_self" className="btn-default btn-header">DOMAIN REGISTER</a>
            </div>
          </div>
          <div className="sub-header">
            <h4 className="light">DOCUMENTATION HIGHLIGHTS</h4>
            <div className="sub-header-container">{categoryListArea}</div>
          </div>
          <div className="des-data-box">
            <div className="des-upper-half">
              <h4
                className="light"
                style={{
                  textAlign: 'center', fontSize: '24px', fontWeight: 400, letterSpacing: '1.2px', lineHeight: '38px', fontFamily: 'montserrat ultralight',
                }}
              >JOIN RSK COMMUNITY</h4>
              <div className="des-box">
                <div className="des-box-item">
                  <a href="https://join.slack.com/t/rskis/shared_invite/enQtNjU5OTY4OTM0OTk0LTViNDc0YWIwMzlmNGQ3OTA4YmFhYzFjYmJiZDhiOGEzOGM3N2IwYWRlNDMwMzgyMDhkYjQ1MmNjNDc3Y2M4M2E" target="_blank">
                    <div className="des-box-item-container">
                      <div className="box-of-icon__des">
                        <svg className="icon-trophy des-icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                          <path
                            fill="#000000"
                            d="M20.2,2H19.5H18C17.1,2 16,3 16,4H8C8,3 6.9,2 6,2H4.5H3.8H2V11C2,12 3,13 4,13H6.2C6.6,15 7.9,16.7 11,17V19.1C8.8,19.3 8,20.4 8,21.7V22H16V21.7C16,20.4 15.2,19.3 13,19.1V17C16.1,16.7 17.4,15 17.8,13H20C21,13 22,12 22,11V2H20.2M4,11V4H6V6V11C5.1,11 4.3,11 4,11M20,11C19.7,11 18.9,11 18,11V6V4H20V11Z"
                          />
                        </svg>
                      </div>
                      <div className="des-item-title">
                        <div>
                      SLACK
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="des-box-item">
                  <a href="https://discord.gg/z9X5ey" target="_blank">
                    <div className="des-box-item-container">
                      <div className="box-of-icon__des">
                        <svg className="icon-puzzle des-icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                          <path
                            fill="#000000"
                            d="M20.5,11H19V7C19,5.89 18.1,5 17,5H13V3.5A2.5,2.5 0 0,0 10.5,1A2.5,2.5 0 0,0 8,3.5V5H4A2,2 0 0,0 2,7V10.8H3.5C5,10.8 6.2,12 6.2,13.5C6.2,15 5,16.2 3.5,16.2H2V20A2,2 0 0,0 4,22H7.8V20.5C7.8,19 9,17.8 10.5,17.8C12,17.8 13.2,19 13.2,20.5V22H17A2,2 0 0,0 19,20V16H20.5A2.5,2.5 0 0,0 23,13.5A2.5,2.5 0 0,0 20.5,11Z"
                          />
                        </svg>
                      </div>
                      <div className="des-item-title">
                        <div>
                      DISCORD
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="des-box-item">
                  <a href="https://t.me/RSKDevgroup" target="_blank">
                    <div className="des-box-item-container">
                      <div className="box-of-icon__des">
                        <svg className="icon-lightbulb des-icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                          <path
                            fill="#000000"
                            d="M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z"
                          />
                        </svg>
                      </div>
                      <div className="des-item-title">
                        <div>
                      TELEGRAM
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="lower-half">
              <div className="data-display-box">
                <div className="data-display-item">
                  <div className="data-display-main">
                    3192
                  </div>
                  <div className="data-display-comment">
                    Members
                  </div>
                </div>
                <div className="data-display-item">
                  <div className="data-display-main">
                    320
                  </div>
                  <div className="data-display-comment">
                    Discussions
                  </div>
                </div>
                <div className="data-display-item">
                  <div className="data-display-main">
                    165
                  </div>
                  <div className="data-display-comment">
                    Dapps
                  </div>
                </div>
                <div className="data-display-item">
                  <div className="data-display-main">
                    87
                  </div>
                  <div className="data-display-comment">
                    Subgroups
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hideOnMobile hideOnLarge reason-for-choice">
            <div className="wrap-pad-pic">
              <img src="https://codex-themes.com/thegem/wp-content/uploads/2016/03/3-1.png" alt="" />
            </div>
            <div className="wrap-reason-details">
              <div className="reason-details-title">
                WHY CHOOSING US
              </div>
              <div className="reason-details-item">
                <button className="reason-details-item-title details-btn-1">
                  <svg className="details-icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24" >
                    <path fill="#000000" d="M3,3H5V13H9V7H13V11H17V15H21V21H3V3Z" />
                  </svg>
                  <div className="reason-details-sub-title">
                    Online Marketing
                  </div>
                  <div type="text" className="show-details-content-btn">+</div>
                  <div type="text" className="show-details-content-btn-active">-</div>
                  <div className="reason-details-content">
                    <h4>
                      divLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua.
                    </h4>
                    <div className="reason-details-content-detail-1">
                      <div className="reason-details-content-detail-1-list">
                        <div>
                          <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                            <path
                              fill="#000000"
                              d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
                            />
                          </svg>
                          <div>Lorem ipsum dolor sit amet</div>
                        </div>
                        <div>
                          <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                            <path
                              fill="#000000"
                              d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
                            />
                          </svg>
                          <div>Adipisicing elit sed do eiusmod</div>
                        </div>
                        <div>
                          <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                            <path
                              fill="#000000"
                              d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
                            />
                          </svg>
                          <div>Incididunt ut labore et dolore</div>
                        </div>
                        <div>
                          <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                            <path
                              fill="#000000"
                              d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
                            />
                          </svg>
                          <div>Enim ad minim veniamullamco</div>
                        </div>
                      </div>
                      <div className="reason-details-content-detail-1-list">
                        <div>
                          <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                            <path
                              fill="#000000"
                              d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
                            />
                          </svg>
                          <div>Lorem ipsum dolor sit amet</div>
                        </div>
                        <div>
                          <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                            <path
                              fill="#000000"
                              d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
                            />
                          </svg>
                          <div>Adipisicing elit sed do eiusmod</div>
                        </div>
                        <div>
                          <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                            <path
                              fill="#000000"
                              d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
                            />
                          </svg>
                          <div>Incididunt ut labore et dolore</div>
                        </div>
                        <div>
                          <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                            <path
                              fill="#000000"
                              d="M19,19H5V5H15V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V11H19M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
                            />
                          </svg>
                          <div>Enim ad minim veniamullamco</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="reason-details-item">
                <button className="reason-details-item-title details-btn-2">
                  <svg className="details-icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                    <path
                      fill="#000000"
                      d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"
                    />
                  </svg>
                  <div className="reason-details-sub-title">DEVELOPMENT</div>
                  <div type="text" className="show-details-content-btn">+</div>
                  <div type="text" className="show-details-content-btn-active">-</div>
                  <div className="reason-details-content">
                    <h4>
                      divLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua.
                    </h4>
                    <div className="reason-details-content-detail-2">
                      <blockquote>Objectively innovate empowered manufactured products whereas parallel</blockquote>
                    </div>
                  </div>
                </button>
              </div>
              <div className="reason-details-item">
                <button className="reason-details-item-title details-btn-3">
                  <svg className="details-icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                    <path
                      fill="#000000"
                      d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V8A2,2 0 0,1 4,6H8V4A2,2 0 0,1 10,2M14,6V4H10V6H14M10.5,17.5L17.09,10.91L15.68,9.5L10.5,14.67L8.41,12.59L7,14L10.5,17.5Z"
                    />
                  </svg>
                  <div className="reason-details-sub-title">Commercial</div>
                  <div type="text" className="show-details-content-btn">+</div>
                  <div type="text" className="show-details-content-btn-active">-</div>
                  <div className="reason-details-content">
                    <h4>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua consectetur adipisicing.
                    </h4>
                    <div className="reason-details-content-detail-3">
                      <div className="reason-details-content-detail-3-item">
                        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                          <path fill="#000000" d="M10,17L15,12L10,7V17Z" />
                        </svg>
                        <div>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        </div>
                      </div>
                    </div>
                    <div className="reason-details-content-detail-3">
                      <div className="reason-details-content-detail-3-item">
                        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                          <path fill="#000000" d="M10,17L15,12L10,7V17Z" />
                        </svg>
                        <div>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        </div>
                      </div>
                    </div>
                    <div className="reason-details-content-detail-3">
                      <div className="reason-details-content-detail-3-item">
                        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                          <path fill="#000000" d="M10,17L15,12L10,7V17Z" />
                        </svg>
                        <div>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        </div>
                      </div>
                    </div>
                    <div className="reason-details-content-detail-3">
                      <div className="reason-details-content-detail-3-item">
                        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                          <path fill="#000000" d="M10,17L15,12L10,7V17Z" />
                        </svg>
                        <div>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        </div>
                      </div>
                    </div>
                    <div className="reason-details-content-detail-3">
                      <div className="reason-details-content-detail-3-item">
                        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                          <path fill="#000000" d="M10,17L15,12L10,7V17Z" />
                        </svg>
                        <div>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hideOnMobile hideOnLarge section-middle-logo">
            <div className="middle-logo-title">
              RSK Dev Site
            </div>
            <div className="middle-logo-text">
              RSK Dev Site Description
            </div>
            <div className="middle-logo-btn-container">
              <a className="btn-middle-logo">great, i want buy now!</a>
            </div>
          </div>

          <div className="section-core-competence" id="coreCompetenceSection">
<<<<<<< HEAD
            <div className="core-competence-title">WHY YOU SHOULD BUILD ON RSK+RIFOS</div>
=======
            <div className="core-competence-title">WHY BUILD ON RSK+RIFOS</div>
>>>>>>> 91b90e065305340570996d02780e442677b1846a
            <div className="core-competence-slogan">
              {
                artistList.map((ele, idx) => (
                  <div key={`core-competence-item-${ele}`} onClick={() => { this.setState({ artistIdx: idx }); }} className={`core-competence-slogan-item ${artistIdx === idx ? 'slogan-actived' : ''} `}>
                    {
                      artistIconArray[idx]
                    }
                    <div className="core-competence-slogan-text">
                      {ele}
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="core-competence-content">
              <h2 className="core-competence-content-item-title">{artistList[artistIdx]}</h2>
              <p className="core-competence-content-item">
                {
                  artistDetailList[artistIdx]
                }
              </p>
            </div>
          </div>
          <div className="section-ready-to-build">
            <div className="ready-to-build-title">
              Ready to start building?
            </div>
            <div className="header-btn-box">
              <a href="https://rsk-dev.readme.io/docs/set-up-a-node" target="_self" className="btn-light btn-header">NODE SETUP</a>
              <a href="https://rsk-dev.readme.io/docs/connect-rsk-with-wallet" target="_self" className="btn-light btn-header">WALLET SETUP</a>
              <a href="https://rsk-dev.readme.io/docs/rns" target="_self" className="btn-light btn-header">DOMAIN REGISTER</a>
              <a href="https://rsk-dev.readme.io/" target="_self" className="btn-light btn-header">FULL DOCUMENTATION</a>
            </div>
          </div>
          <div className="section-lastest-blog">
            <div className="lastest-blog-title">LATEST NEWS FROM BLOG</div>
            <div className="lastest-blog-container">
              <div className="lastest-blog-current">
                <div className="lastest-blog-current-shadow"></div>
                <div className="lastest-blog-current-content">
                  <div className="lastest-blog-current-content-title"> 18 Mar: <div
                    className="lastest-blog-current-content-title-sub"
                  >business post</div>
                  </div>
                  <div className="lastest-blog-current-content-details">
                    Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed doiusmod tempor incidilabore et dolore magna
                    aliqua. Ut enim ad mini veniam, quis nostrud
                  </div>
                  <div className="lastest-blog-current-content-author">
                    By admin
                  </div>
                  <div className="lastest-blog-current-content-arrows">
                    <div className="lastest-blog-current-content-arrows-left">
                      <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                        <path fill="#000000" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
                      </svg>
                    </div>
                    <div className="lastest-blog-current-content-arrows-right">
                      <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
                        <path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lastest-blog-list">
                <div className="lastest-blog-list-item">
                  <div className="lastest-blog-list-item-pic lastest-blog-list-item-pic-1"></div>
                  <div className="lastest-blog-list-item-content">
                    <div className="lastest-blog-list-item-title"> 18 MAR: <div className="lastest-blog-list-item-content-title-sub">
                      BUSINESS POST</div>
                    </div>
                    <div className="lastest-blog-list-item-text"> Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed
                doiusmod tempor incidilabore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud</div>
                    <div className="lastest-blog-list-item-author">By admin</div>
                  </div>
                </div>
                <div className="lastest-blog-list-item">
                  <div className="lastest-blog-list-item-pic lastest-blog-list-item-pic-2"></div>
                  <div className="lastest-blog-list-item-content">
                    <div className="lastest-blog-list-item-title">18 MAR: <div className="lastest-blog-list-item-content-title-sub">
                      BUSINESS POST</div>
                    </div>
                    <div className="lastest-blog-list-item-text"> Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed
                doiusmod tempor incidilabore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud</div>
                    <div className="lastest-blog-list-item-author">By admin</div>
                  </div>
                </div>
                <div className="lastest-blog-list-item">
                  <div className="lastest-blog-list-item-pic lastest-blog-list-item-pic-3"></div>
                  <div className="lastest-blog-list-item-content">
                    <div className="lastest-blog-list-item-title">18 MAR: <div className="lastest-blog-list-item-content-title-sub">
                      BUSINESS POST</div>
                    </div>
                    <div className="lastest-blog-list-item-text"> Lorem ipsum dolor sit ametcon sectetur adipisicing elit, sed
                doiusmod tempor incidilabore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud</div>
                    <div className="lastest-blog-list-item-author">By admin</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-contact-way hideOnMobile hideOnLarge">
            <div className="contact-way-title">
              CONTACT US
            </div>
            <div className="contact-item-container">
              <div className="contact-item-list">
                <span className="contact-item-icon ion-android-locate"></span>
                <span className="contact-item-title">Address</span>
                <span className="contact-item-details">Beechwood Dr, Lower, NY 11559, USA</span>
              </div>
              <div className="contact-item-list">
                <span className="contact-item-icon ion-ios-telephone"></span>
                <span className="contact-item-title">PHONE</span>
                <span className="contact-item-details">+1 916-875-2235</span>
              </div>
              <div className="contact-item-list">
                <span className="contact-item-icon ion-android-mail"></span>
                <span className="contact-item-title">EMAIL</span>
                <span className="contact-item-details">docs@rsk.co</span>
              </div>
            </div>
            <div className="contact-total-icon-container">
              <div className="contact-total-icon-item">
                <Link to="/">
                  <span className="contact-total-icon-font ion-social-facebook"></span>
                </Link>
              </div>
              <div className="contact-total-icon-item">
                <Link to="/">
                  <span className="contact-total-icon-font ion-social-twitter" style={{ fontSize: 20 }}></span>
                </Link>
              </div>
              <div className="contact-total-icon-item">
                <Link to="/">
                  <span className="contact-total-icon-font ion-social-reddit"></span>
                </Link>
              </div>
              <div className="contact-total-icon-item">
                <Link to="/">
                  <span className="contact-total-icon-font ion-social-googleplus"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

MissionSection.propTypes = {
};

MissionSection.defaultProps = {
};

// Wrap the component to inject dispatch and state into it
export default MissionSection;
