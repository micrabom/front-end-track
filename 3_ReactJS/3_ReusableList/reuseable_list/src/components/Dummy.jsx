import React from 'react';
import '../assets/css/styles.css';

function List(props){
	return(
		<div className="post" key={index}>
			<img src={props.image} alt="character" className="image-left" />
			<div className="details">
				<p className="name">{props.name}</p>
				<p className="date">{props.date}</p>
				<p className="message">{props.message}</p>
			</div>
		</div>
	);
}