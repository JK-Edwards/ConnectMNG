import logo from "../../images/logo.png";
import React from "react";

import "./Volunteer.css";

export default function Volunteer() {
	return (
		<div>
			<div className={"infoContainer"}>
				<div className={"imgContainer"}>
					<img src={logo} alt={"Connect MNG Logo"}></img>
				</div>
				<div className={"textContainer"}>
					<h1>Volunteer</h1>
				</div>
			</div>
		</div>
	);
};