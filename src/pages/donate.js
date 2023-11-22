import React from "react";
import logo from "../Images/logo.png";

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

const Donate = () => {
	return (
		<div>
			<h1>Secure online donation forms with various donation options (one-time, monthly, specific campaigns, etc.).</h1>
			<div style={baseContainer}>
				<div style={imgContainer}>
					<img src={logo}></img>
				</div>
				<div style={textContainer}>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
						sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
			<div>
				<h1>Information about fundraising goals and how donations are utilized.</h1>
			</div>
			<div>
				<h1>Partnerships with businesses or individuals supporting your cause.</h1>
			</div>
		</div>
	);
};

export default Donate;
