import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import {Provider } from 'react-redux'
import reducers from './reducers'


import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../node_modules/react-notifications/lib/notifications.css';
import './index.css';
import App from './App';

const store = createStore(reducers)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
