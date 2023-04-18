import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';

import Click from './components/Click';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Header />
		<div className="container">
			<Click />`
		</div>
	</React.StrictMode>
);

