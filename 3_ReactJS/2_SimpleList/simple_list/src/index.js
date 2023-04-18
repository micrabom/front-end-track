import React from 'react';
import ReactDOM from 'react-dom/client';

import List from './components/ClassComponents';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Header />
		<List />
	</React.StrictMode>
);
