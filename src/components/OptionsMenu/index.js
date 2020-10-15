import React from 'react';
// import { AppContext } from '../../store';
import { useAuthState } from "react-firebase-hooks/auth";
import { withFirebase } from '../../firebase'
import PropTypes from 'prop-types'
import Loading from '../Loading'
import './style.css'

function OptionsMenu({ firebase }) {
    const [user, loading] = useAuthState(firebase.getAuth());
    // const [state, dispatch] = useContext(AppContext);

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

    const onChatBot = () => {
        console.log('onChatBot');
        // dispatch({
        //   type: 'ON_OFF', 
        //   payload: 'showWidget',
        // });
    };
    return (
        <div className="cwv-OptionsMenu">
            {loading && <Loading />}
            {user ?
                <button onClick={(e) => onSignOut(e)}>Sign Out</button>
                :
                <button onClick={(e) => onSignIn(e)}>Sign In</button>}
            <button onClick={(e) => onChatBot(e)}>Pulse Chatbot</button>
            <button onClick={(e) => onChatBot(e)}>Mute Sounds</button>
            <button onClick={(e) => onChatBot(e)}>Rate this Chat</button>
            <button onClick={(e) => onChatBot(e)}>End Chat</button>
        </div>
    )
}

OptionsMenu.propTypes = {
    firebase: PropTypes.object.isRequired,
}

export default withFirebase(OptionsMenu)

