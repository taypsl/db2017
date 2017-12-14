import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css';
import AppRoutes from './AppRoutes';
import registerServiceWorker from './registerServiceWorker';
import ReactGA from 'react-ga';
import ReactModal from 'react-modal';


// *** Initialize Google Analytics ***
ReactGA.initialize('UA-111277252-1');

function logPageView() {
  ReactGA.pageview(window.location.pathname);
}

ReactGA.pageview(window.location.pathname + window.location.search);


ReactModal.setAppElement('#root');

const props = {};

ReactDOM.render(
	<AppRoutes {...props} onUpdate={logPageView} />, 
	document.getElementById('root'));

registerServiceWorker();

