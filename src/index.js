import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css';
import AppRoutes from './AppRoutes';
import registerServiceWorker from './registerServiceWorker';

import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const props = {};

ReactDOM.render(<AppRoutes {...props} />, document.getElementById('root'));
registerServiceWorker();
