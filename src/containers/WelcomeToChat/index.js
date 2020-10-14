import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function ChatButtonCommonent({ onClose, onChat, text }) {
  return (
    <div className="wpcwv-welcomeMessage">
      <div className="wpcwv-wmHeader">
        <button className="wpcwv-button"
          onClick={() => {
            onClose();
          }}
        >
          Close Me
        </button>
      </div>

      <div className="wpcwv-wmBody">
        <h2> {text}</h2>
        Hi there! I am Tidus a bot working for TIDIO. I can help you with one of
        the topics listed below
      </div>
      <div className="wpcwv-wmFooter">
        <button className="wpcwv-button"
          onClick={(e) => {
            onChat(e);
          }}
        >
          Start Chat
        </button>
      </div>
    </div>
  );
}

ChatButtonCommonent.propTypes = {
  onClose: PropTypes.func.isRequired,
  onChat: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default ChatButtonCommonent;
