import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import AppRoutes from './AppRoutes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRoutes />, document.getElementById('root'));
registerServiceWorker();
