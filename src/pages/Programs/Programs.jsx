import logo from "../../images/logo.png";
import React from "react";

import "./Programs.css";

export default function Programs() {
	return (
		<div>
			<div className={"infoContainer"}>
				<div className={"imgContainer"}>
					<img src={logo} alt={"Connect MNG Logo"}></img>
				</div>
				<div className={"textContainer"}>
					<h1>Programs</h1>
				</div>
			</div>
		</div>
	);
};