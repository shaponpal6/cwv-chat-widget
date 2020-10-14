import React, { useContext, useState } from 'react';
// import { ChatWidgetContext } from '../../contexts/chatWidgetContext';
import { AppContext } from '../../store';
import Operators from '../../components/Operators';
import OptionsMenu from '../../components/OptionsMenu';
// import ChatHeader from '../ChatHeader';
// import ChatBody from '../ChatBody';
// import ChatFooter from '../ChatFooter';
import Message from '../../components/Message'
import './style.css';
import './header.css';
import './body.css';
import './footer.css';

function Widget() {
  const [state, dispatch] = useContext(AppContext);
  const [menuState, setMenuState] = useState(false);
  const [message, setMessage] = useState('');

  // Back to Dashboard
  const onDashboardBack = () => {
    dispatch({
      type: 'SET_ROUTE',
      payload: 'chatDashboard',
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
    const messageText = message;
    setMessage('');
    console.log('message>>', message);
    // let data = { id: Math.random(), text: message + Math.random() };
    // setMessages((ownState) => [...ownState, data]);
    dispatch({
      type: 'ADD_MESSAGE',
      payload: { id: Math.random(), text: messageText },
    });
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
              <button onClick={onDashboardBack}>Back</button>
            )}
            Dashboard
          </div>
          <div className="wpcwv-chatEventsRight">
            <div
              className="wpcwv-chatEventsMenu"
              onClick={() => setMenuState(!menuState)}
            >
              Menu
            </div>
            <div
              className="wpcwv-chatWidgetClose"
              onClick={() => onCloseWidget()}
            >
              close
            </div>
          </div>
          {menuState && <OptionsMenu />}
        </div>
        {state.operators.length > 0 && (
          <Operators operators={state.operators} />
        )}
      </div>

      
      {/* ----------- Chat Body Container ------------ */}
      <div className="wpcwv-chatBodyWraper">
        {state.messages.map((message) => {
          return <Message key={message.id} message={message}/>;
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

export default Widget;
