import { ADD_MESSAGE, SET_MESSAGES, SET_CLIENT_DATA, WHEEL_STATE } from './actionTypes';

export const addMessage = message => ({
    type: ADD_MESSAGE,
    payload: message,
})

export const setMessages = messages => ({
    type: SET_MESSAGES,
    payload: messages,
})

export const setClientData = messages => ({
    type: SET_CLIENT_DATA,
    payload: messages,
})

export const setWheelState = wheel => ({
    type: WHEEL_STATE,
    payload: wheel,
})

