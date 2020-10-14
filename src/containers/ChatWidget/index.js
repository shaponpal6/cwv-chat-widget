import React, { useContext, useState } from 'react';
import uniqid from 'uniqid';
// import { ChatWidgetContext } from '../../contexts/chatWidgetContext';
import { AppContext } from '../../store';
import { addMessage } from '../../store/actions';
import Operators from '../../components/Operators';
import OptionsMenu from '../../components/OptionsMenu';
// import ChatHeader from '../ChatHeader';
// import ChatBody from '../ChatBody';
// import ChatFooter from '../ChatFooter';
import Message from '../../components/Message';
import Messages from '../../components/Messages';
import AuthForm from '../../components/AuthForm';
import { useAuthState } from "react-firebase-hooks/auth";
import { withFirebase } from '../../firebase'
import { ArrowDownLeft, Settings, Bell, ArrowLeft } from 'react-feather';
import PropTypes from 'prop-types'


import './style.css';
import './header.css';
import './body.css';
import './footer.css';

function Widget({ firebase }) {

  console.log('firebase', firebase)
  const [user, loading, error] = useAuthState(firebase.getAuth());
  const [state, dispatch] = useContext(AppContext);
  const [menuState, setMenuState] = useState(false);
  const [message, setMessage] = useState('');



  // Back to Dashboard
  const onSignIn = (e) => {
    console.log('sign in click', e)
    firebase.doSignInAnonymously()
  };

  // Back to Dashboard
  const onSignOut = (e) => {
    console.log('sign out click', e)
    firebase.doSignOut()
  };

  // Close Chat Widget
  const onDashboardBack = () => {
    dispatch({
      type: 'ON_OFF',
      payload: 'chatWidget',
    });
  };

  // Close Chat Widget
  const onCloseWidget = () => {
    dispatch({
      type: 'ON_OFF',
      payload: 'chatWidget',
    });
  };

  // Chat Start Button
  const onSend = (e) => {
    e.preventDefault();
    if (!message) return;
    const replay = message;
    setMessage('');
    console.log('message>>', message);
    // let data = { id: Math.random(), text: message + Math.random() };
    // setMessages((ownState) => [...ownState, data]);
    const { uid, displayName, photoURL } = firebase.getCurrentUser();
    const messageObj = {
      key: uniqid('sp'),
      text: replay,
      type: 'admin',
      status: 0,
      senderID: uid,
      name: displayName,
      photoURL: photoURL,
      time: 'ss',
    }
    dispatch(addMessage(messageObj));
    firebase.setMessage(messageObj);
  };

  const handleInput = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  return (
    <div className="wpcwv-chatWidget">
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
          <div className="wpcwv-chatEventsRight">
            <div
              className="wpcwv-chatEventsMenu"
              onClick={() => setMenuState(!menuState)}
            >
              <Bell />
            </div>

            <div
              className="wpcwv-chatEventsMenu"
              onClick={() => setMenuState(!menuState)}
            >
              <Settings />
            </div>
            <div
              className="wpcwv-chatWidgetClose"
              onClick={() => onCloseWidget()}
            >
              <ArrowDownLeft />
            </div>
          </div>
          {menuState && <OptionsMenu onSignIn={onSignIn} onSignOut={onSignOut} />}
        </div>
        {state.operators.length > 0 && (
          <Operators operators={state.operators} />
        )}
      </div>

      {/* ----------- Chat Body Container ------------ */}
      <div className="wpcwv-chatBodyWraper">

        {loading && 'Message: Loading.....'}
        {error && 'Error: ' + error}
        {user ? <Messages /> : <AuthForm />}

        {state.messages.map((message) => {
          return <Message key={message.key} message={message} />;
        })}


      </div>
      {/* ----------- Chat Footer Container ------------ */}
      <div className="wpcwv-FooterWraper">
        <div className="wpcwv-widgetFooter">
          <form className="wpcwv-messageForm" onSubmit={onSend}>
            {/* <input onChange={handleInput} value={message} /> */}
            <textarea
              className="wpcwv-textarea"
              onChange={handleInput}
              spellCheck="false"
              data-gramm="false"
              value={message}
              placeholder="This is a description."
            />
            <button type="submit">SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
}
Widget.propTypes = {
  firebase: PropTypes.object.isRequired
}
export default withFirebase(Widget);
