import React from 'react';
import PropTypes from 'prop-types';

import Ul from './Ul';
import Title from './Title';
import Wrapper from './Wrapper';


function List(props) {
  let content = <div />;

  // If we have items, render them
  if (props.items) {
    content = props.items;
  }

  return (
    <Wrapper style={props.style}>
      <Title>{props.title}</Title>
      <Ul>{content}</Ul>
    </Wrapper>
  );
}

List.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  style: PropTypes.object,
};
List.defaultProps = {
  items: <div></div>,
  title: '',
  style: {},
};

export default List;
