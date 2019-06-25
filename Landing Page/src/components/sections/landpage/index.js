import React, { PropTypes } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import ScrollReveal from '../../scrollReveal';
import { subListArray, artistList, artistDetailList } from '../../../config/constant';
import { cloudinaryConfig } from '../../react-cloudinary';
cloudinaryConfig({ cloud_name: 'dd1ixvdxn' });

const artistDetailElements = artistDetailList.map((item, idx) => (
  <p key={`artist-details-content-${item.name}`} className="core-competence-content-item">
    <span>{item.content}</span>
    {
      item.link ? <a href={item.link} className="artist-details-content-link" target="_blank">{item.linkName}</a> : ''
    }
  </p>
));
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
  <div
    style={{
      width: '24px',
      height: '24px',
      marginTop: '-10px',
      marginBottom: '10px',
    }}
  >
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 196 196"
      width="180%"
      height="180%"
    >
      <path
        fill="#000"
        d="M67.4,80.2h26.1c0.1,0,0.3-0.1,0.3-0.3v-8.4c0-0.1-0.1-0.3-0.3-0.3H67.4c-0.1,0-0.3,0.1-0.3,0.3v8.4
           C67.1,80.1,67.3,80.2,67.4,80.2z M85.1,64.8h8.4c0.1,0,0.3-0.1,0.3-0.3V56c0-0.1-0.1-0.3-0.3-0.3h-8.4c-0.1,0-0.3,0.1-0.3,0.3
           v8.4C84.8,64.6,84.9,64.8,85.1,64.8z M49,102.2h-8.4c-0.1,0-0.3,0.1-0.3,0.3v8.4c0,0.1,0.1,0.3,0.3,0.3H49
           c0.1,0,0.3-0.1,0.3-0.3v-8.4C49.2,102.3,49.1,102.2,49,102.2z M79.9,102.2h-8.4c-0.1,0-0.3,0.1-0.3,0.3v26.1
           c0,0.1,0.1,0.3,0.3,0.3h8.4c0.1,0,0.3-0.1,0.3-0.3v-26.1C80.2,102.3,80.1,102.2,79.9,102.2z M131.6,93.8h8.4
           c0.1,0,0.3-0.1,0.3-0.3V85c0-0.1-0.1-0.3-0.3-0.3h-8.4c-0.1,0-0.3,0.1-0.3,0.3v8.4C131.3,93.7,131.4,93.8,131.6,93.8z
            M116.1,93.8h8.4c0.1,0,0.3-0.1,0.3-0.3V67.4c0-0.1-0.1-0.3-0.3-0.3h-8.4c-0.1,0-0.3,0.1-0.3,0.3v26.1
           C115.8,93.7,115.9,93.8,116.1,93.8z M85.1,49.2h8.4c0.1,0,0.3-0.1,0.3-0.3v-8.4c0-0.1-0.1-0.3-0.3-0.3h-8.4
           c-0.1,0-0.3,0.1-0.3,0.3V49C84.8,49.2,84.9,49.2,85.1,49.2z M64.5,102.2H56c-0.1,0-0.3,0.1-0.3,0.3v8.4c0,0.1,0.1,0.3,0.3,0.3
           h8.4c0.1,0,0.3-0.1,0.3-0.3v-8.4C64.7,102.3,64.6,102.2,64.5,102.2z M128.6,115.8h-26.1c-0.1,0-0.3,0.1-0.3,0.3v8.4
           c0,0.1,0.1,0.3,0.3,0.3h26.1c0.1,0,0.3-0.1,0.3-0.3v-8.4C128.9,115.9,128.8,115.8,128.6,115.8z M146.5,100.4h-37
           c-0.1,0-0.3,0.1-0.3,0.3v8.2c0,0.1,0.1,0.3,0.3,0.3h37c0.1,0,0.3-0.1,0.3-0.3v-8.2C146.8,100.5,146.6,100.4,146.5,100.4z
            M110.9,131.2h-8.4c-0.1,0-0.3,0.1-0.3,0.3v8.4c0,0.1,0.1,0.3,0.3,0.3h8.4c0.1,0,0.3-0.1,0.3-0.3v-8.4
           C111.2,131.4,111.1,131.2,110.9,131.2z M86.8,87.1c0-0.1-0.1-0.3-0.3-0.3h-37c-0.1,0-0.3,0.1-0.3,0.3v8.2
           c0,0.1,0.1,0.3,0.3,0.3h37c0.1,0,0.3-0.1,0.3-0.3L86.8,87.1L86.8,87.1z M155.5,84.8H147c-0.1,0-0.3,0.1-0.3,0.3v8.4
           c0,0.1,0.1,0.3,0.3,0.3h8.4c0.1,0,0.3-0.1,0.3-0.3v-8.4C155.8,84.9,155.7,84.8,155.5,84.8z M95.3,109.2h-8.2
           c-0.1,0-0.3,0.1-0.3,0.3v37c0,0.1,0.1,0.3,0.3,0.3h8.2c0.1,0,0.3-0.1,0.3-0.3v-37C95.6,109.3,95.5,109.2,95.3,109.2z
            M109.2,86.6v-37c0-0.1-0.1-0.3-0.3-0.3h-8.2c-0.1,0-0.3,0.1-0.3,0.3v37c0,0.1,0.1,0.3,0.3,0.3h8.2
           C109,86.9,109.2,86.7,109.2,86.6z M110.9,146.8h-8.4c-0.1,0-0.3,0.1-0.3,0.3v8.4c0,0.1,0.1,0.3,0.3,0.3h8.4
           c0.1,0,0.3-0.1,0.3-0.3V147C111.2,146.8,111.1,146.8,110.9,146.8z"
      />

    </svg>
  </div>,
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
                  <a href="https://twitter.com/rsksmart" target="_blank">
                    <div className="des-box-item-container">
                      <div className="box-of-icon__des">
                        <span className="ion-social-twitter community-icon des-icon"></span>
                      </div>
                      <div className="des-item-title">
                        <div>
                      TWITTER
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="des-box-item">
                  <a href="https://gitter.im/rsksmart" target="_blank">
                    <div className="des-box-item-container">
                      <div className="box-of-icon__des">
                        <svg className="des-icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 384 512"><path d="M66.4 322.5H16V0h50.4v322.5zM166.9 76.1h-50.4V512h50.4V76.1zm100.6 0h-50.4V512h50.4V76.1zM368 76h-50.4v247H368V76z" /></svg>
                      </div>
                      <div className="des-item-title">
                        <div>
                        GITTER
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="des-box-item">
                  <a href="https://github.com/rsksmart" target="_blank">
                    <div className="des-box-item-container">
                      <div className="box-of-icon__des">
                        <span className="ion-social-github community-icon des-icon"></span>
                      </div>
                      <div className="des-item-title">
                        <div>
                      GITHUB
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="des-box-item">
                  <a href="https://hackerone.com/rsksmart" target="_blank">
                    <div className="des-box-item-container">
                      <div className="box-of-icon__des">
                        <svg className="des-icon" style={{ width: '24px', height: '24px' }} viewBox="0 0 256 478"><path d="M9.132 5.98C3.075 9.966 0 15.178 0 21.486v433.84c0 5.503 3.15 10.5 9.457 15.14 6.263 4.647 13.983 6.963 23.196 6.963 8.806 0 16.527-2.316 23.233-6.963 6.67-4.595 10.063-9.637 10.063-15.14V21.523c0-6.346-3.23-11.476-9.737-15.542C49.704 2.034 41.866 0 32.653 0c-9.62 0-17.459 2.034-23.52 5.98zM198.856 178.3l-88.296 55.346c-3.956 3.701-5.657 9.325-4.925 17.01.68 7.61 4.2 14.856 10.426 21.693 6.256 6.88 13.25 11.193 21.251 13.025 7.882 1.787 13.865.812 17.821-2.852l34.916-21.776v194.58c0 5.502 3.032 10.5 9.17 15.139 5.98 4.647 13.663 6.963 22.877 6.963 9.213 0 17.17-2.316 23.84-6.963 6.706-4.64 10.064-9.637 10.064-15.14V193.723c0-6.353-3.277-11.476-9.74-15.423-6.469-4.03-14.507-5.988-24.164-5.988-9.62 0-17.34 1.959-23.24 5.988z" /></svg>
                      </div>
                      <div className="des-item-title">
                        <div>
                      HACKERONE
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="lower-half">
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
            </div> */}
          </div>
          {/* <div className="hideOnMobile hideOnLarge reason-for-choice">
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
          </div> */}

          <div className="section-core-competence" id="coreCompetenceSection">
            <div className="core-competence-title">WHY BUILD ON RSK+RIFOS</div>
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
              {
                artistDetailElements[artistIdx]
              }
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
          {/* <div className="section-lastest-blog">
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
          </div> */}
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
