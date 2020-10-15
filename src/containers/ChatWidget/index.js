import React, { useContext, useState } from 'react';
import uniqid from 'uniqid';
import { AppContext } from '../../store';
import { addMessage } from '../../store/actions';
import Operators from '../../components/Operators';
import HeaderActionsButton from '../../components/HeaderActionsButton';


import Messages from '../../components/Messages';
import AuthForm from '../../components/AuthForm';
import { useAuthState } from "react-firebase-hooks/auth";
import { withFirebase } from '../../firebase'
import { ArrowLeft } from 'react-feather';
import PropTypes from 'prop-types'


import './style.css';
import './header.css';
import './body.css';
import './footer.css';

function Widget({ firebase }) {

  console.log('firebase', firebase)
  const [user, loading, error] = useAuthState(firebase.getAuth());
  const [state, dispatch] = useContext(AppContext);

  const [message, setMessage] = useState('');





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

          <HeaderActionsButton onCloseWidget={onCloseWidget} />

        </div>
        {state.operators.length > 0 && (
          <Operators operators={state.operators} />
        )}
      </div>

      {/* ----------- Chat Body Container ------------ */}
      <div className="wpcwv-chatBodyWraper">

        {user ? <Messages /> : <AuthForm />}


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
