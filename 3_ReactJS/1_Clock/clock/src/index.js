import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

const updateClock = () => {
	const currentTime = new Date();
	let hours = currentTime.getHours();
	let minutes = currentTime.getMinutes();
	let seconds = currentTime.getSeconds();
	const meridiem = hours >= 12 ? 'pm' : 'am';

	// convert hours from 24-hour time to 12-hour time
	hours = hours % 12;
	// hours = hours ? hours : 12; // the hour '0' should be '12'
	// if (hours === 0) hours = 12;
	hours = hours ? hours : 12;
	// add leading zeros to minutes and seconds
	/* 
	if (seconds < 10) {
		seconds = '0' + seconds;
	} else {
		seconds = seconds;
	}
	*/
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;


	const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;

	const clockElement = (
		<div>
			<h1>Hello, World!</h1>
			<h2>It is {timeString}</h2>
		</div>
	);

	ReactDOM.render(clockElement, root);
};

updateClock();
setInterval(updateClock, 1000);
