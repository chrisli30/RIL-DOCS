import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';


const Wrapper = styled.div`
  @media ${(props) => props.theme.tablet} {
    display: none !important;
  }
  display:flex;
  align-items:center;
 .triggerBtn {
        position: relative;
        padding: 9px 10px;
        background-color: transparent;
        background-image: none;
        border: 1px solid transparent;
        .icon-bar {
            width: 22px;
            height: 2px;
            transition: all 0.2s;
            background-color: ${(props) => props.theme.bgColor};
            display: block;
            &:not(:first-of-type) {
                margin-top: 4px;
            }
        }
        .top-bar {
            transform: rotate(45deg);
            transform-origin: 10% 10%;
        }
        .middle-bar {
            opacity: 0;
        }
        .bottom-bar {
            transform: rotate(-45deg);
            transform-origin: 10% 90%;
        }
        &.menuCollapsed {
            .top-bar {
                transform: rotate(0deg);
            }
            .middle-bar {
                opacity: 1;
            }
            .bottom-bar {
                transform: rotate(0deg);
            }
        }
    }
`;

function CollapesBtn(props) {
  const { toggleCollapsed, btnClassName } = props;
  return (<Wrapper >
    <button
      className={btnClassName}
      onClick={toggleCollapsed}
      data-toggle="collapse"
      data-target="#bs-example-navbar-collapse-1"
    >
      <span className="icon-bar top-bar" />
      <span className="icon-bar middle-bar" />
      <span className="icon-bar bottom-bar" />
    </button>
  </Wrapper>);
}

CollapesBtn.propTypes = {
  toggleCollapsed: PropTypes.func.isRequired,
  btnClassName: PropTypes.string.isRequired,
};

export default CollapesBtn;
