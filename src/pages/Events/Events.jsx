import Calendar from "../../components/Calendar/Calendar.jsx";
import React from "react";

import "./Events.css";

const events = [
	{
	  	date: "Saturday 8th June 2024",
	  	events: [
			{
		  		time: "11:30am",
		  		event: "Networking Workshop",
		  		location: "Capitol 1 Cafe, Meeting Room 4, 333 Westlake Ave N"
			}
		]
	},
	{
		date: "Saturday 22nd June 2024",
		events: [
			{
				time: "11:30am",
				event: "Leadership Workshop",
				location: "Capitol 1 Cafe, Meeting Room 4, 333 Westlake Ave N"
			}
	  	]
	  },
	  {
		date: "Saturday 13th July 2024",
		events: [
			{
				time: "11:30am",
				event: "LinkedIn Workshop",
				location: "Capitol 1 Cafe, Meeting Room 4, 333 Westlake Ave N"
			}
	  	]
	  },
	  {
		date: "Saturday 27th July 2024",
		events: [
			{
				time: "11:30am",
				event: "Interview Workshop",
				location: "Capitol 1 Cafe, Meeting Room 4, 333 Westlake Ave N"
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