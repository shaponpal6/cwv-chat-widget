import React from 'react';
import { render } from 'react-dom';
// import Home from './home';
import Chat from './chatDom';
import Template from './template';

import * as serviceWorker from "./serviceWorker";

render(
    <div>
        <Template/>
        <Chat/>
    </div>,
    document.getElementById('cwvChatWidgetHome')
);

serviceWorker.unregister();