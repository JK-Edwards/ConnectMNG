import logo from "../../images/logo.png";
import Gallery from "../../components/Gallery/Gallery";
import React from "react";

import { useIntl } from "react-intl";

import "./About.css";

export default function About() {
	const intl = useIntl();

	return (
		<div className={"aboutContainer"}>
			<div className={"infoContainer"}>
				<div className={"imgContainer"}>
					<img src={logo} alt={"Connect MNG Logo"}></img>
				</div>
				<div className={"textContainer"}>
					<h1>
						{intl.formatMessage({id: "about"})}
					</h1>
				</div>
			</div>
			<div>
				<Gallery/>
			</div>
		</div>
	);
};