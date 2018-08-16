import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './scss/main.css';

import {BrowserRouter} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory()
ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL} history={history}><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();