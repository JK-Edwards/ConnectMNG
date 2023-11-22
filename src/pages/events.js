import React from 'react';
import logo from "../Images/logo.png";
import Calendar from '../components/Calendar';

const baseContainer = {
	"display": "flex",
	"justify-content": "space-around",
	"background": "#0051F0"
  };

const imgContainer = {
	"display": "flex",
	"justify-content": "space-around"
};

const textContainer = {
	"display": "flex",
	"align-items": "center"
};

const Events = () => {
	return (
		<div>
			<h1>Calendar of upcoming events, workshops, fundraisers, and community outreach programs.</h1>
			<Calendar></Calendar>
			<div>
				<h1>Event details, including date, time, location, and registration information.</h1>
			</div>
		</div>
	);
};

export default Events;
