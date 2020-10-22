import { DASHBOARD_BACK, CHAT_WIDGET, ON_OFF, SET_ROUTE, ADD_MESSAGE, SET_MESSAGES, SET_CLIENT_DATA, WHEEL_STATE, WHEEL_DASH_STATE, SET_FAQS_DATA } from '../actionTypes';

const OnOff = (state, key) => {
  switch (key) {
    case 'showWidget':
      return {
        ...state,
        showWidget: !state.showWidget,
      };
    case 'chatWidget':
      return {
        ...state,
        chatWidget: !state.chatWidget,
      };
    case 'welcomeBox':
      return {
        ...state,
        welcomeBox: !state.welcomeBox,
      };
    default:
      return state;
  }
};
const Reducer = (state, action) => {
  switch (action.type) {
    case ON_OFF:
      return OnOff(state, action.payload);
    case SET_ROUTE:
      return {
        ...state,
        chatRoute: action.payload,
      };

    case DASHBOARD_BACK: {
      return {
        ...state,
        chatRoute: 'chatDashboard',
      }
    }

    case ADD_MESSAGE: {
      return {
        ...state,
        messages: state.messages.concat(action.payload),
      }
    }

    case SET_MESSAGES: {
      const payload = (action.payload && Array.isArray(action.payload)) ? action.payload : [];
      return {
        ...state,
        messages: payload,
      }
    }
    case SET_CLIENT_DATA: {
      const payload = (typeof action.payload === 'object' && action.payload !== null) ? action.payload : {};
      return {
        ...state,
        clientData: payload,
      }
    }
    case SET_FAQS_DATA: {
      const payload = (action.payload && Array.isArray(action.payload)) ? action.payload : [];
      return {
        ...state,
        faqs: payload,
      }
    }

    case WHEEL_STATE: {
      return {
        ...state,
        wheelState: action.payload,
      }
    }

    case WHEEL_DASH_STATE: {
      return {
        ...state,
        dashWheelState: action.payload,
      }
    }

    case 'REMOVE_POST':
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
