import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Ava from '../../images/avater.png';

import {makeTime} from '../../functions/time';
// import './style.css';
import { jsx, css, Global, ClassNames } from '@emotion/core'
import converted from './style.js';

function Message({ message }) {
  const [showTime, setShowTime] = useState(true)
  console.log('message', message)
  const onClickHandler = () => {
    setShowTime(!showTime);
  }
  const avater = message.photoURL ?? Ava;
  const typeClass = (message.type === "client") ? "wpcwv-client" : "wpcwv-admin";
  return (
    <>
    <Global styles={converted}/>
    <div className={"wpcwv-messageWrapper " + typeClass} >
      {message.type !== "client" &&
        <figure className="wpcwv-avaterWrapper">
          <img src={avater} alt={message.name} />
          <figcaption className="font-accent">{message.name}</figcaption>
        </figure>
      }
      <div className="wpcwv-messageContainer">
        <div className="wpcwv-senderMessage cwv-shadow" onClick={onClickHandler}>{message.text}</div>

        <div className="wpcwv-messageHeader" style={{ opacity: (+ showTime) }}>
          <span className="wpcwv-messageSender">{message.name}</span>
          <time dateTime="Mon Oct 05 2020 13:27:10 GMT+0600 (Bangladesh Standard Time)">
            { makeTime(message.time, 'MMM d, yy h:mm a')}
          </time>
        </div>

      </div>
      <div className="wpcwv-messageDivider"></div>
    </div>
    </>
  );
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Message;
