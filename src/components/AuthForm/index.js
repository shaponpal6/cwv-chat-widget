import React from 'react'
import PropTypes from 'prop-types'
// import { useAuthState } from "react-firebase-hooks/auth";
import { withFirebase } from '../../firebase'

function AuthForm({ firebase }) {
    // const [user, loading, error] = useAuthState(firebase.getAuth());
    console.log('firebase', firebase)
    return (
        <div>
            Auth Page2
        </div>
    )
}

AuthForm.propTypes = {
    firebase: PropTypes.any.isRequired
}

export default withFirebase(AuthForm)

