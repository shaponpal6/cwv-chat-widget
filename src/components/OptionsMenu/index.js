import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function OptionsMenu({ onSignIn, onSignOut }) {
    const onChatBot = () => {
        console.log('onChatBot');
        // dispatch({
        //   type: 'ON_OFF', 
        //   payload: 'showWidget',
        // });
    };
    return (
        <div className="cwv-OptionsMenu">
            <button onClick={(e) => onSignIn(e)}>Sign In</button>
            <button onClick={(e) => onSignOut(e)}>Sign Out</button>
            <button onClick={(e) => onChatBot(e)}>Pulse Chatbot</button>
            <button onClick={(e) => onChatBot(e)}>Mute Sounds</button>
            <button onClick={(e) => onChatBot(e)}>Rate this Chat</button>
            <button onClick={(e) => onChatBot(e)}>End Chat</button>
        </div>
    )
}

OptionsMenu.propTypes = {
    onSignIn: PropTypes.func.isRequired,
    onSignOut: PropTypes.func.isRequired,
}

export default OptionsMenu

