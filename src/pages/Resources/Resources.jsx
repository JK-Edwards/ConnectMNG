import logo from "../../images/logo.png";
import React from "react";

import "./Resources.css";

export default function Resources() {
	return (
		<div>
			<div className={"infoContainer"}>
				<div className={"imgContainer"}>
					<img src={logo} alt={"Connect MNG Logo"}></img>
				</div>
				<div className={"textContainer"}>
					<h1>Resources</h1>
				</div>
			</div>
		</div>
	);
};