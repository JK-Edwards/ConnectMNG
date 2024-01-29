import Calendar from "../../components/Calendar/Calendar.jsx";
import React from "react";

import "./Events.css";

const events = [
	{
	  date: "Monday 29th January 2024",
	  events: [
		{
		  time: "3pm",
		  event: "Resume Help",
		  location: "Cap 1 Cafe"
		},
		{
		  time: "4pm",
		  event: "Happy Hour",
		  location: "Bangrak"
		}
	  ]
	},
	{
		date: "Tuesday 30th January 2024",
		events: [
		  {
			time: "3pm",
			event: "Guest Speaker",
			location: "Cap 1 Cafe"
		  },
		  {
			time: "4pm",
			event: "Clubbing",
			location: "Capitol Hill"
		  }
		]
	  }
	// Add more objects for other dates as needed
  ];

export default function Events() {
	return (
		<div className={"eventsContainer"}>
			<h1>Calendar</h1>
			<Calendar events={events}/>
		</div>
	);
};