import React from 'react';
import ReactDOM from 'react-dom';
import ImagesPerson1 from './assets/images/person1.png';
import ImagesPerson2 from './assets/images/person2.png';
import Header from './components/Header';
import PostDetails from './components/PostDetails';


const items = [
	{
		name: 'John Doe',
		date: 'April 1, 2023',
		message: 'Hello World!',
		image: ImagesPerson1,
	},
	{
		name: 'Jane Smith',
		date: 'March 31, 2023',
		message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		image: ImagesPerson2,
	},
	{
		name: 'Bob Johnson',
		date: 'March 30, 2023',
		message:
			'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		image: ImagesPerson1,
	},
];


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Header />
		<PostDetails count={3} items={items} />
	</React.StrictMode>
);

