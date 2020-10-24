import React, { useContext } from 'react';
import { AppContext } from './store';
import WelcomePage from './containers/WelcomeToChat';
import ChatWidget from './containers/ChatWidget';
import ChatDashboard from './containers/ChatDashboard';
import Firebase, { FirebaseContext } from "./firebase";
import { MessageSquare } from 'react-feather';
import { setRoute, doOnOff } from './store/actions'
import Knowledgebase from './containers/Knowledgebase';
import ButtonCircle from './components/ButtonCircle';
import './utils/widget.css';

const ChatApp = () => {
    const [state, dispatch] = useContext(AppContext);

    // Chat Button Open / Close
    const onChatButtonClick = (e) => {
        console.log(e);
        onChatStartClick()
        dispatch(doOnOff('chatWidget'));
    };

    // Chat Welcome Open / Close
    const onChatWelcomeBoxClose = () => {
        dispatch(doOnOff('welcomeBox'));
    };

    // Chat Start Button
    const onChatStartClick = () => {
        dispatch(setRoute('chatDashboard'));
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
