import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { AppContext } from '../../store';
import Message from '../Message';

import { setMessages, setClientData } from '../../store/actions'

import { useDocument } from "react-firebase-hooks/firestore";
import { withFirebase } from '../../firebase'

function Messages({ firebase }) {

    const [state, dispatch] = useContext(AppContext);



    const [_clientData, loading, error] = useDocument(
        firebase.getClientData(),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    useEffect(() => {
        console.log('_clientData shapshot', _clientData)
        // console.log('_clientData shapshot', _clientData.data())
        if (_clientData) {
            let clientSnapshot = _clientData.data();
            console.log('clientSnapshot init', clientSnapshot)
            if (clientSnapshot && clientSnapshot.hasOwnProperty('messages')) {
                let clientMessageSnapshot = clientSnapshot.messages;
                console.log('clientSnapshot message', clientMessageSnapshot)
                // dispatch(setMessages(clientMessageSnapshot))
                dispatch(setMessages(clientMessageSnapshot));
                delete clientSnapshot.messages;
            }
            console.log('clientSnapshot data', clientSnapshot)
            // dispatch(setClientData(clientSnapshot))
            dispatch(setClientData(clientSnapshot));

        }
        return () => { }
    }, [loading])


    return (
        <div>
            Messages page
            {console.log('state>>>>>>', state)}
            {_clientData && console.log('_clientData, loading, error', _clientData.data(), loading, error)}
            {loading && 'Message: Loading.....'}
            {error && 'Error: ' + error}

            {state.messages.map((message) => {
                return <Message key={"ss" + message.key} message={message} />;
            })}



        </div>
    )
}

Messages.propTypes = {
    firebase: PropTypes.any.isRequired
}

export default withFirebase(Messages)

