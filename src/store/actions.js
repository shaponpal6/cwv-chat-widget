import { SET_ROUTE, DASHBOARD_BACK, CHAT_WIDGET, ON_OFF, ADD_MESSAGE, SET_MESSAGES, SET_CLIENT_DATA, WHEEL_STATE } from './actionTypes';

export const setRoute = route => ({
    type: SET_ROUTE,
    payload: route,
})

export const doDashboardBack = dash => ({
    type: DASHBOARD_BACK,
    payload: dash,
})

export const doChatWidget = widget => ({
    type: CHAT_WIDGET,
    payload: widget,
})

export const doOnOff = key => ({
    type: ON_OFF,
    payload: key,
})

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

