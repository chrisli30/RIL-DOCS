import React, { PropTypes } from 'react';
import { cloudinaryConfig, CloudinaryImage } from '../components/react-cloudinary';

cloudinaryConfig({ cloud_name: 'dd1ixvdxn' });

class ImageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const { href, cloudinaryId, style } = this.props;

    return (
      <div className="img-container">
        <div className="inner">
          <a href={href} target="_blank">
            <CloudinaryImage publicId={cloudinaryId} options={{ height: 150, crop: 'scale' }} style={style} />
          </a>
        </div>
      </div >
    );
  }
}

ImageContainer.propTypes = {
  href: PropTypes.string.isRequired,
  cloudinaryId: PropTypes.string.isRequired,
  style: PropTypes.object,
};

ImageContainer.defaultProps = {
  style: {},
};

export default ImageContainer;
