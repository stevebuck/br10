import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BlazeMenu from './BlazeMenu';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BlazeMenu />, document.getElementById('menu'));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
