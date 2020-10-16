import React from 'react';
import PropTypes from 'prop-types';
import Ava from '../../images/avater.png';
import './style.css'

function Message({ message }) {
  return (
    <div className="wpcwv-messageWrapper">
      <figure className="wpcwv-avaterWrapper">
        <img src={Ava} alt="s" />
        <figcaption className="font-accent">S</figcaption>
      </figure>
      <div className="wpcwv-messageContainer">
        <div className="wpcwv-senderMessage cwv-shadow">{message.text}</div>

        <div className="wpcwv-messageHeader">
          <span className="wpcwv-messageSender">muhammadroshaan</span>
          <time dateTime="Mon Oct 05 2020 13:27:10 GMT+0600 (Bangladesh Standard Time)">
            Oct 05, 1:27 PM
          </time>
        </div>

      </div>
      <div className="wpcwv-messageDivider"></div>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Message;
