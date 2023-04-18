import React from 'react';
import '../assets/css/style.css';

function PostDetails(props) {
	const { count, items } = props;

	const listItems = items.slice(0, count).map((item, index) => (
		<div className="post" key={index}>
			<img src={item.image} alt="character" className="image-left" />
			<div className="details">
				<p className="name">{item.name}</p>
				<p className="date">{item.date}</p>
				<p className="message">{item.message}</p>
			</div>
		</div>
	));

	return <div className="list">{listItems}</div>;
}

function List(props) {
	return(
		<div className="post" key={index}>
			<img src={props.image} alt="character" className="image-left" />
			<div className="details">
				<p className="name">{props.name}</p>
				<p className="date">{props.date}</p>
				<p className="message">{props.message}</p>
			</div>
		</div>
	)
}



export default PostDetails;
