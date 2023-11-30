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

export default function Programs() {
	return (
		<div>
			<h1>Descriptions of your programs, initiatives, and services.</h1>
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
				<h1>Information about ongoing projects and upcoming events.</h1>
			</div>
			<div>
				<h1>Success stories and testimonials from beneficiaries</h1>
			</div>
		</div>
	);
};