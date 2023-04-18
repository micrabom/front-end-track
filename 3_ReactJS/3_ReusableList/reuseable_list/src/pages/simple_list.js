import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import PostDetails from './components/PostDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Header />
		<PostDetails />
	</React.StrictMode>
);
