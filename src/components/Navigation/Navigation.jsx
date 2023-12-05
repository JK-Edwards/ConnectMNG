import classNames from "classnames"
import logo from "../../images/logo.png";
import React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";

import "./Navigation.css";

export default function Navigation() {
	const [activeIndex, setActiveIndex] = useState(0);
	const contactButtonClasses = classNames("button", "contact");

	return (
		<div className={"navigationContainer"}>
			<Link to="/" onClick={() => setActiveIndex(0)}>
				<img src={logo} alt={"Connect MNG Logo"} className={"logo"} />
			</Link>
			<NavLink to="/programs" text="Programs" className={"button"} isActive={activeIndex === 1} onClick={() => setActiveIndex(1)}/>
			<NavLink to="/get-involved" text="Get Involved" className={"button"} isActive={activeIndex === 2} onClick={() => setActiveIndex(2)}/>
			<NavLink to="/blogs" text="Blogs" className={"button"} isActive={activeIndex === 3} onClick={() => setActiveIndex(3)}/>
			<NavLink to="/about-us" text="About Us" className={"button"} isActive={activeIndex === 4} onClick={() => setActiveIndex(4)}/>
			<NavLink to="/resources" text="Resources" className={"button"} isActive={activeIndex === 5} onClick={() => setActiveIndex(5)}/>
			<NavLink to="/contact-us" text="Contact Us" className={contactButtonClasses} isActive={activeIndex === 6} onClick={() => setActiveIndex(6)}/>
    	</div>
	);
};

function NavLink({to, text, isActive, className, onClick}) {
	if (isActive && (className !== classNames("button", "contact"))) {
		className = classNames(className, "active");
	};

	return (
		<Link to={to} className={className} onClick={onClick}>
			{text}
		</Link>
	);
};