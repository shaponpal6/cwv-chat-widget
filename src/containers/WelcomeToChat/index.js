import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRight, XCircle } from 'react-feather';

import { jsx, css, Global, ClassNames } from '@emotion/core'
import converted from './style.js';

function ChatButtonCommonent({ onClose, onChat, text }) {
  
  return (

    <>
      <Global styles={converted}/>
    <div className="wpcwv-welcomeMessage">
      <span className="wpcwv-wmHeader">
        <button className="wpcwv-button wpcwv-btnClose"
          onClick={() => {
            onClose();
          }}
        >
          <XCircle />
        </button>
      </span>

      <div className="wpcwv-wmBody">
        <h2> {text}</h2>
        Hi there! Welcome to our Site. We are here to help you! We are ready to help you grow your business!
      </div>
      <div className="wpcwv-wmFooter">
        <button className="wpcwv-button wpcwv-buttonPrimary wpcwv-aniSVGRight"
          onClick={(e) => {
            onChat(e);
          }}
        >
          <span>Let's Start</span>&nbsp;&nbsp;<ArrowRight />
        </button>
      </div>
    </div>
    </>
  );
}

ChatButtonCommonent.propTypes = {
  onClose: PropTypes.func.isRequired,
  onChat: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default ChatButtonCommonent;
