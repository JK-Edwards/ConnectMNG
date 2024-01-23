import React from "react";

import { useIntl } from "react-intl";

import "./Volunteer.css";

export default function Volunteer() {
	const intl = useIntl();

	return (
		<div className={"volunteerContainer"}>
			<h1>This is the Volunteer page!</h1>
		</div>
	);
};