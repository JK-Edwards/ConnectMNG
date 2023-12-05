import logo from "../../images/logo.png";
import Gallery from "../../components/Gallery/Gallery";
import React from "react";

import "./About.css";

export default function About() {
	return (
		<div>
			<div className={"infoContainer"}>
				<div className={"imgContainer"}>
					<img src={logo} alt={"Connect MNG Logo"}></img>
				</div>
				<div className={"textContainer"}>
					<h1>About Us</h1>
				</div>
			</div>
			<div>
				<Gallery/>
			</div>
		</div>

	);
};