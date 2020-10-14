import React from 'react';
import { render } from 'react-dom';
import ChatApp from './App';
import AppContextProvider from './store';
import './index.css';

import * as serviceWorker from "./serviceWorker";

render(
    <AppContextProvider>
        <ChatApp />
    </AppContextProvider>,
    document.getElementById('cwvChatWidgetRoot')
);



serviceWorker.unregister();


