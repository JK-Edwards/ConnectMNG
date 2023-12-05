import logo from "../../images/logo.png";
import React from "react";

import "./Contact.css";

export default function Contact() {
	return (
		<div>
			<div className={"infoContainer"}>
				<div className={"imgContainer"}>
					<img src={logo} alt={"Connect MNG Logo"}></img>
				</div>
				<div className={"textContainer"}>
					<h1>Contact Us</h1>
				</div>
			</div>
		</div>
	);
};