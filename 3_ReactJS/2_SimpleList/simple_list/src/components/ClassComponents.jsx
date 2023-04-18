import React, { Component } from 'react';
import '../assets/css/style.css';
import ImagesPerson1 from '../assets/images/person1.png';
import ImagesPerson2 from '../assets/images/person2.png';

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

class List extends Component {
	render() {
		const listItems = [];

		for (let i = 0; i < items.length; i++) {
			const item = items[i];
			const listItem = (
				<div className="post" key={i}>
					<img src={item.image} alt="character" className="image-left" />
					<div className="details">
						<p className="name">{item.name}</p>
						<p className="date">{item.date}</p>
						<p className="message">{item.message}</p>
					</div>
				</div>
			);
			listItems.push(listItem);
		}

		return <div className="list">{listItems}</div>;
	}
}

export default List;
