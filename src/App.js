import React, { useEffect, useContext } from 'react';
import { AppContext } from './store';
import WelcomePage from './containers/WelcomeToChat';
// import ChatWidgetSelector from './containers/ChatWidgetSelector';
import ChatWidget from './containers/ChatWidget';
import ChatDashboard from './containers/ChatDashboard';
import Firebase, { FirebaseContext } from "./firebase";
// import localState from './store/state';
import './utils/widget.css';
import { Camera, MessageSquare } from 'react-feather';
import Knowledgebase from './containers/Knowledgebase';
import ButtonCircle from './components/ButtonCircle';

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
            payload: 'chatDashboard',
        });
    };


    return (
        <div className="wpcwv-container">

            {(state.chatRoute === "chatWidget") && <FirebaseContext.Provider value={new Firebase()}><ChatWidget /></FirebaseContext.Provider>}
            {(state.chatRoute === "chatDashboard") && <ChatDashboard />}
            {(state.chatRoute === "knowledgebase") && <Knowledgebase />}
            {(state.chatRoute === "chatIntro" && state.welcomeBox) && <WelcomePage text="welcome!!" onClose={onChatWelcomeBoxClose} onChat={onChatButtonClick} />}

            {state.chatRoute === "chatIntro" && <div className="wpcwv-startButton">
                <ButtonCircle type="circle" onClick={onChatButtonClick} image={<MessageSquare size={36} />} />
            </div>}
        </div>
    );
};

export default ChatApp;
