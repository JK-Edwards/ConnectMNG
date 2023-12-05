import logo from "../../images/logo.png";
import React from "react";

import "./Blogs.css";

export default function Blogs() {
	return (
		<div>
			<div className={"infoContainer"}>
				<div className={"imgContainer"}>
					<img src={logo} alt={"Connect MNG Logo"}></img>
				</div>
				<div className={"textContainer"}>
					<h1>Blogs</h1>
				</div>
			</div>
		</div>
	);
};