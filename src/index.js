import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from "@speechly/react-client";
import './index.css';
import App from './App';
import {Provider} from "./context/context"
ReactDOM.render(
    <SpeechProvider appId="540347f0-57bf-41e6-a76b-89563bf3f39b" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);

