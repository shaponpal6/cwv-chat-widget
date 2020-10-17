import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { useAuthState } from "react-firebase-hooks/auth";
import { withFirebase } from '../../firebase'
import './style.css'
import CardComponent from '../Card';

function AuthForm({ firebase }) {
    const [formData, setFormData] = useState({});
    // const [user, loading, error] = useAuthState(firebase.getAuth());

    // On Form Submit
    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log('data', formData)
        // Submit here
        firebase.doSignInAnonymouslyWithData(formData)
    };

    // get Data
    const getData = (key) => {
        return formData.hasOwnProperty(key) ? formData[key] : '';
    };

    // Set data
    const setData = (key, value) => {
        return setFormData({ ...formData, [key]: value });
    };

    // Set data
    // const doInputField = ({ key, type, placeholder, myClass }) => {
    //     return <input name={key} type={type} className={"wpcwv-input " + myClass} placeholder={placeholder} value={getData(key)} onChange={(e) => setData(key, e.target.value)} />
    // };

    console.log('firebase', firebase)
    return (
        <div className="wpcwv-authPage">
            <CardComponent title="Sign Up Form">
                <form onSubmit={onFormSubmit} className="wpcwv-authForm">
                    <input name="name" type="text" className="wpcwv-input" placeholder="Your Name" value={getData('name')} onChange={(e) => setData('name', e.target.value)} />
                    <input name="email" type="email" className="wpcwv-input" placeholder="Your Email" value={getData('email')} onChange={(e) => setData('email', e.target.value)} />
                    <button type="submit" className="wpcwv-button wpcwv-buttonPrimary">Submit</button>
                </form>
            </CardComponent>
        </div>
    )
}

AuthForm.propTypes = {
    firebase: PropTypes.any.isRequired
}

export default withFirebase(AuthForm)

