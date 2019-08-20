/**
 *
 * Content.js
 *
 * A common Content
 */
import React from 'react';
import PropTypes from 'prop-types';
import StyledContent from './StyledContent';
import Highlight from './Highlight';
import Default from './Default';

const renderContent = contentStr => {
  let hitCount = 0;
  const { length } = contentStr;
  const stringEleList = [];
  let defaultString = '';
  let highlightString = '';
  // eslint-disable-next-line no-plusplus
  for (let idx = 0; idx < length; idx++) {
    const char = contentStr[idx];
    if (char === '*') {
      hitCount += 1;
      if (hitCount === 1) {
        stringEleList.push(
          <Default key={`default-${idx}`}>{defaultString}</Default>,
        );
        defaultString = '';
        // eslint-disable-next-line no-continue
        continue;
      }
    }
    if (hitCount === 0) {
      defaultString += char;
      if (idx === length - 1) {
        stringEleList.push(
          <Default key={`default-${idx}`}>{defaultString}</Default>,
        );
      }
    } else if (hitCount === 1) {
      highlightString += char;
    } else if (hitCount === 2) {
      stringEleList.push(
        <Highlight key={`highlight-${idx}`}>{highlightString}</Highlight>,
      );
      hitCount = 0;
      highlightString = '';
    }
  }
  return stringEleList;
};

function Content(props) {
  return (
    <StyledContent {...props} style={props.style}>
      {renderContent(props.children)}
    </StyledContent>
  );
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default Content;
