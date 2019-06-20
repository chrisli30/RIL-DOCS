import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { cloudinaryConfig, CloudinaryImage, CloudinaryVideo } from '../../components/react-cloudinary';

import { landPageMenu } from '../../config/constant';
const menuEle = landPageMenu.map((item) => (
  <li key={`menu-list-${item.name}`}>
    <a href={item.link} alt={item.name}>{item.name}
    </a>
  </li>
));

class InfoSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (

      <section>
        <div className="wrapper dark info">
          <div className="horizontalWrapper">
            <Row>
              <Col
                xs={24}
                sm={8}
              >
                <ul>
                  {
                    menuEle
                  }
                </ul>
              </Col>
              <Col xs={24} sm={16}>
                <Row gutter={24}>
                  <Col
                    xs={24}
                    sm={16}
                  >
                    <p>RSK is the most secure smart contract network in the world and enables decentralized applications secured by the Bitcoin Network to empower people and improve the quality of life of millions.</p>
                  </Col>
                  <Col
                    xs={24}
                    sm={8}
                  >
                    <ul>
                      <li><p>&nbsp;</p></li>
                      <li><p>&nbsp;</p></li>
                      <li><p>&nbsp;</p></li>
                      <li><p></p></li>
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <p className="footer">dev@rsk.co</p>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    );
  }
}

InfoSection.propTypes = {
};

InfoSection.defaultProps = {
};

// Wrap the component to inject dispatch and state into it
export default InfoSection;
