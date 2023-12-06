import logo from "../../images/logo.png";
import React from "react";

import { useIntl } from "react-intl";

import "./Programs.css";

export default function Programs() {
	const intl = useIntl();

	return (
		<div>
			<div className={"infoContainer"}>
				<div className={"imgContainer"}>
					<img src={logo} alt={"Connect MNG Logo"}></img>
				</div>
				<div className={"textContainer"}>
					<h1>
						{intl.formatMessage({id: "programs"})}
					</h1>
				</div>
			</div>
		</div>
	);
};