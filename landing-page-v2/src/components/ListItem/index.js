import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import ImagePie from '../ImagePie';
import Link from '../Link';

function ListItem(props) {
  return (
    <Wrapper>
      <ImagePie hasShadow={false} height="12px" width="12px" style={{ backgroundImage: `url(${props.iconUrl})` }} />
      <Link link={props.link} content={props.content} />
    </Wrapper>
  );
}

ListItem.propTypes = {
  link: PropTypes.string.isRequired,
  iconUrl: PropTypes.string,
  content: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
  iconUrl: '',
};

export default ListItem;
