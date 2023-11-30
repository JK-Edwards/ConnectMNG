import Calendar from "../components/Calendar";
import React from "react";

export default function Events() {
	return (
		<div>
			<h1>Calendar of upcoming events, workshops, fundraisers, and community outreach programs.</h1>
			<Calendar/>
			<div>
				<h1>Event details, including date, time, location, and registration information.</h1>
			</div>
		</div>
	);
};