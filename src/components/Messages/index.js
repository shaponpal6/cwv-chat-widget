import React, { useContext, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { AppContext } from '../../store';
import Message from '../Message';
import RSC from "react-scrollbars-custom";
import './style.css';

import { setMessages, setClientData } from '../../store/actions'

import { useDocument } from "react-firebase-hooks/firestore";
import { withFirebase } from '../../firebase'

function Messages({ firebase }) {
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        console.log('messagesEndRef', messagesEndRef)
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const [state, dispatch] = useContext(AppContext);

    useEffect(scrollToBottom, [state.messages]);



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

        // Message scroll position bottom
        // scrollToBottom()

        return () => { }
    }, [loading])


    const cwvScrollerElement = (e) => {
        console.log('-------cwvScrollerElement---------', e)
        // messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }


    return (
        <RSC className="wpcwv-messageScrollbarWraper" id="wpcwv-messageScrollbarWraper" style={{ width: "100%", height: "100%" }} momentum={true} maximalThumbYSize={10} onScrollStart={cwvScrollerElement} >
            Messages page
            {console.log('state>>>>>>', state)}
            {_clientData && console.log('_clientData, loading, error', _clientData.data(), loading, error)}
            {loading && 'Message: Loading.....'}
            {error && 'Error: ' + error}

            {state.messages.map((message) => {
                return <Message key={"ss" + message.key} message={message} />;
            })}


            <div ref={messagesEndRef} />
        </RSC>
    )
}

Messages.propTypes = {
    firebase: PropTypes.any.isRequired
}

export default withFirebase(Messages)

