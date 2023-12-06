import logo from "../../images/logo.png";
import React from "react";

import { useIntl } from "react-intl";

import "./Blogs.css";

export default function Blogs() {
	const intl = useIntl();

	return (
		<div>
			<div className={"infoContainer"}>
				<div className={"imgContainer"}>
					<img src={logo} alt={"Connect MNG Logo"}></img>
				</div>
				<div className={"textContainer"}>
					<h1>
						{intl.formatMessage({id: "blogs"})}
					</h1>
				</div>
			</div>
		</div>
	);
};