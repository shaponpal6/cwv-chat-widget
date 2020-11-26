import React from 'react';
// import { AppContext } from '../../store';
import { useAuthState } from "react-firebase-hooks/auth";
import { withFirebase } from '../../firebase'
import PropTypes from 'prop-types'
import Loading from '../Loading'
// import './style.css'
import styled from '@emotion/styled'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    position: absolute;
    top: 30px;
    right: 10px;
    background: #31f89b;
    padding: 10px;
    border-radius: 4px;
`
const Button = styled.button`
    background: #9C27B0;
    margin: 2px;
    padding: 4px;
    border-radius: 3px;
    color: #fff;
    font-size: 14px;
`

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
    // Back to Dashboard
    const muteSound = (e) => {
        console.log('sign out click', e)
        //firebase.doSignOut()
    };
    // Back to Dashboard
    const rating = (e) => {
        console.log('sign out click', e)
        //firebase.doSignOut()
    };

    const onChatBot = () => {
        console.log('onChatBot');
        // dispatch({
        //   type: 'ON_OFF', 
        //   payload: 'showWidget',
        // });
    };
    return (
        <Div className="cwv-OptionsMenu cwv-shadow">
            {loading && <Loading />}
            {!user ?? <Button onClick={(e) => onSignIn(e)}>Sign In</Button>}
            {/* <Button onClick={(e) => onChatBot(e)}>Pulse Chatbot</Button> */}
            <Button onClick={(e) => muteSound(e)}>Mute Sounds</Button>
            <Button onClick={(e) => rating(e)}>Rate this Chat</Button>
            <Button onClick={(e) => onSignOut(e)}>End Chat</Button>
        </Div>
    )
}

OptionsMenu.propTypes = {
    firebase: PropTypes.object.isRequired,
}

export default withFirebase(OptionsMenu)

