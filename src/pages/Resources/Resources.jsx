import logo from "../../images/logo.png";
import React from "react";

import { useIntl } from "react-intl";

import "./Resources.css";

export default function Resources() {
	const intl = useIntl();

	return (
		<div className={"resourcesContainer"}>
			<div className={"infoContainer"}>
				<div className={"imgContainer"}>
					<img src={logo} alt={"Connect MNG Logo"}></img>
				</div>
				<div className={"textContainer"}>
					<h1>
						{intl.formatMessage({ id: "resources" })}
					</h1>
				</div>
			</div>
		</div>
	);
};