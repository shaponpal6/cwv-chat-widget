import React, { useContext, useState, useRef, useLayoutEffect } from 'react';
import uniqid from 'uniqid';
import { AppContext } from '../../store';
import { setRoute, addMessage, setWheelState } from '../../store/actions';
import Operators from '../../components/Operators';
import HeaderActionsButton from '../../components/HeaderActionsButton';
import DraftMessageEditor from '../../components/DraftMessageEditor';
import ButtonCircle from '../../components/ButtonCircle';

// import getUTCNow from '../../functions/time'


import Messages from '../../components/Messages';
import AuthForm from '../../components/AuthForm';
import { useAuthState } from "react-firebase-hooks/auth";
import { withFirebase } from '../../firebase'
import { ArrowLeft, X } from 'react-feather';
import PropTypes from 'prop-types'

import { jsx, css, Global, ClassNames } from '@emotion/core'
import converted from './style.js';
import CloseButton from '../../components/CloseButton';
// import './header.css';
// import './body.css';
// import './footer.css';

function Widget({ firebase }) {
  const cwvRef = useRef();


  const [user, loading, error] = useAuthState(firebase.getAuth());
  const [state, dispatch] = useContext(AppContext);

  const [message, setMessage] = useState('');

  // Ref for scroll
  const [scrollPosition, setSrollPosition] = useState(0);
  const [isScrollingState, setIsScrollingState] = useState(false);
  var isScrolling;

  const handleScroll = (event) => {
    if (!isScrollingState) {
      dispatch(setWheelState(event.deltaY < 0 ? 'up' : 'down'));
      setSrollPosition(event.deltaY);
    }
    setIsScrollingState(true)
    window.clearTimeout(isScrolling);
    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {
      setIsScrollingState(false)
    }, 1000);
  };

  useLayoutEffect(() => {
    cwvRef.current.addEventListener('mousewheel', handleScroll);

    return () => {
      cwvRef.current.removeEventListener('mousewheel', handleScroll);
    };
  }, []);


  // Close Chat Widget
  const onDashboardBack = () => {
    dispatch(setRoute('chatDashboard'));
  };

  // Close Chat Widget
  const onCloseWidget = () => {
    dispatch(setRoute('chatIntro'));
  };

  // Chat Start Button
  const onSend = (message) => {
    // e.preventDefault();
    if (!message) return;
    const replay = message;
 
    setMessage('');
    console.log('message>>', message);
    const { uid, displayName, photoURL } = firebase.getCurrentUser();
    const messageObj = {
      key: uniqid('sp'),
      text: replay,
      type: 'client',
      status: 0,
      senderID: uid,
      name: displayName,
      photoURL: photoURL,
      time: new Date().toISOString(),
    }
    dispatch(addMessage(messageObj));
    firebase.setMessage(messageObj);
  };

  return (
    <>
      <Global styles={converted}/>
    <div className="wpcwv-widgetWraper">
      <div ref={cwvRef} className="wpcwv-chatWidget">
        {/* ----------- Chat Header Container ------------ */}
        <div className="wpcwv-chatHeader">
          <div className="wpcwv-chatEvents">
            <div className="wpcwv-chatEventsLeft">
              {state.showWidget && (
                <button onClick={onDashboardBack}>
                  <ArrowLeft />
                </button>
              )}
            </div>


            {!user ?
              <Operators operators={state.operators} />
              : <Operators operators={state.operators} />}

            <HeaderActionsButton onCloseWidget={onCloseWidget} />

          </div>

        </div>

        {/* ------onScroll={handleScroll}----- Chat Body Container ------------ */}
        <div className="wpcwv-chatBodyWraper">

          {user ? <Messages /> : <AuthForm />}


        </div>
        {/* ----------- Chat Footer Container ------------ */}
        <div className="wpcwv-FooterWraper">
          <div className="wpcwv-widgetFooter">
            <div onSubmit={onSend}>
              {/* <input onChange={handleInput} value={message} /> */}
              <DraftMessageEditor onMessageSave={onSend} />
              {/* <textarea
              className="wpcwv-textarea"
              onChange={handleInput}
              spellCheck="false"
              data-gramm="false"
              value={message}
              placeholder="This is a description."
            />
            <button type="submit">SEND</button> */}
            </div>
          </div>
        </div>
      </div>
      <CloseButton onClick={onCloseWidget} text={'Close '} />
      {/* <div className="wpcwv-widgetClose"><ButtonCircle setClassName="wpcwv-buttonDashboardClose" onClick={onCloseWidget} content="Close " image={<X size={17} />} /></div> */}
    </div>
    </>
  );
}
Widget.propTypes = {
  firebase: PropTypes.object.isRequired
}
export default withFirebase(Widget);
