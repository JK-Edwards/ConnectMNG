import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import React from "react";
import classNames from "classnames";


export default function NavLink({to, text, isActive, className, onClick, homeButton}) {
	if (isActive && (className !== classNames("button", "contact"))) {
		className = classNames(className, "isActive");
	};

	//if this is the home button, render an image tag
	// if (!homeButton) {
	// 	return (
	// 		<IoHome />
			
			
	// 	);
	// }
	return (
		<Link to={to} className={className} onClick={onClick}>
			{homeButton &&<IoHome />}{text}
		</Link>
	);
};