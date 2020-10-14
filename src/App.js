import React, { useEffect, useContext } from 'react';
import { AppContext } from './store';
import WelcomePage from './containers/WelcomeToChat';
// import ChatWidgetSelector from './containers/ChatWidgetSelector';
import ChatWidget from './containers/ChatWidget';
import ChatDashboard from './containers/ChatDashboard';
import Firebase, { FirebaseContext } from "./firebase";
// import localState from './store/state';
import './utils/widget.css';
import { Camera } from 'react-feather';

const ChatApp = () => {
    const [state, dispatch] = useContext(AppContext);

    useEffect(() => {
        console.log(state);
    }, [state]);

    // Chat Button Open / Close
    const onChatButtonClick = (e) => {
        console.log(e);
        onChatStartClick()
        dispatch({
            type: 'ON_OFF',
            payload: 'chatWidget',
        });
    };

    // Chat Welcome Open / Close
    const onChatWelcomeBoxClose = () => {
        dispatch({
            type: 'ON_OFF',
            payload: 'welcomeBox',
        });
    };

    // Chat Start Button
    const onChatStartClick = () => {
        dispatch({
            type: 'SET_ROUTE',
            payload: 'chatWidget',
        });
    };


    return (
        <div className="wpcwv-container">
            <h2>Do not Think so much. Just work</h2>
            <Camera />

            {(state.chatRoute === "chatWidget" && state.chatWidget) && <FirebaseContext.Provider value={new Firebase()}><ChatWidget /></FirebaseContext.Provider>}
            {(state.chatRoute === "chatDashboard" && state.chatWidget) && <ChatDashboard />}
            {(state.chatRoute === "chatIntro" && state.welcomeBox) && <WelcomePage text="welcome!!" onClose={onChatWelcomeBoxClose} onChat={onChatButtonClick} />}

            <div className="wpcwv-startButton">
                <button
                    className="wpcwv-button wpcwv-widgetButton wpcwv-theme"
                    onClick={onChatButtonClick}
                >
                    Start
        </button>
            </div>
        </div>
    );
};

export default ChatApp;
