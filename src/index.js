import React from 'react';
import { render } from 'react-dom';
// import { inlineCss } from 'inline-css';
import ChatApp from './App';
import AppContextProvider from './store';
import { IFrame, Frame, WithEmotion } from './containers/IFrame'
import styled2 from 'styled-components'
import styled from '@emotion/styled'
import { jsx, css, Global, ClassNames } from '@emotion/core'
import index from './index.css';

import * as serviceWorker from "./serviceWorker";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: palevioletred;
`;

const color = 'white'
render(
    <React.StrictMode>
        <WithEmotion id="id#hss" head={<title>CWV App</title>} style={{ width: '400px', height: '100vh', position: 'absolute', right: 0, bottom: 0 }}>
            <AppContextProvider>
                <Title>H11111111111</Title>
                <Button>dhhhhhhhhhhhhhhhhhsj</Button>

                <Global
                    styles={{
                        body: {
                            margin: 0,
                            padding: 0
                        },
                        'hh': {
                            padding: '32px',
                            backgroundColor: 'hotpink',
                            fontSize: '24px'
                        }

                    }}
                />

                <p className="hh"> HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH </p>

                <ChatApp />
            </AppContextProvider>
        </WithEmotion>
    </React.StrictMode>,
    document.getElementById('cwvChatWidgetRoot')
);



serviceWorker.unregister();