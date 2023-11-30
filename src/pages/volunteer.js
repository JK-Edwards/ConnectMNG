import logo from "../images/logo.png";
import React from "react";

const baseContainer = {
	"display": "flex",
	"justify-content": "space-around",
	"background": "#0051F0"
};

const imgContainer = {
	"display": "flex",
	"justify-content": "space-around"
};

const textContainer = {
	"display": "flex",
	"align-items": "center"
};

export default function Volunteer() {
	return (
		<div>
			<h1>Information on how individuals can volunteer or become a member.</h1>
			<div style={baseContainer}>
				<div style={imgContainer}>
					<img src={logo} alt={"Connect MNG Logo"}></img>
				</div>
				<div style={textContainer}>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
						sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
			<div>
				<h1>Volunteer opportunities, roles, and requirements.</h1>
			</div>
			<div>
				<h1>Volunteer testimonials and success stories.</h1>
			</div>
		</div>
	);
};