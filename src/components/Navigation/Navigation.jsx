import classNames from "classnames"
import logo from "../../images/logo.png";
import React from "react";

import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import { useState } from "react";

import "./Navigation.css";

export default function Navigation() {
	const intl = useIntl();
	const [activeIndex, setActiveIndex] = useState(0);
	const contactButtonClasses = classNames("button", "contact");

	return (
		<div className={"navigationContainer"}>
			<Link to="/" onClick={() => setActiveIndex(0)}>
				<img src={logo} alt={"Connect MNG Logo"} className={"logo"} />
			</Link>
			<NavLink to={"/programs"} text={intl.formatMessage({id: "programs"})} className={"button"} isActive={activeIndex === 1} onClick={() => setActiveIndex(1)}/>
			<NavLink to={"/get-involved"} text={intl.formatMessage({id: "volunteer"})} className={"button"} isActive={activeIndex === 2} onClick={() => setActiveIndex(2)}/>
			<NavLink to={"/blogs"} text={intl.formatMessage({id: "blogs"})} className={"button"} isActive={activeIndex === 3} onClick={() => setActiveIndex(3)}/>
			<NavLink to={"/about-us"} text={intl.formatMessage({id: "about"})} className={"button"} isActive={activeIndex === 4} onClick={() => setActiveIndex(4)}/>
			<NavLink to={"/resources"} text={intl.formatMessage({id: "resources"})} className={"button"} isActive={activeIndex === 5} onClick={() => setActiveIndex(5)}/>
			<NavLink to={"/donate"} text={intl.formatMessage({id: "donate"})} className={contactButtonClasses} isActive={activeIndex === 6} onClick={() => setActiveIndex(6)}/>
    	</div>
	);
};

function NavLink({to, text, isActive, className, onClick}) {
	if (isActive && (className !== classNames("button", "contact"))) {
		className = classNames(className, "isActive");
	};

	return (
		<Link to={to} className={className} onClick={onClick}>
			{text}
		</Link>
	);
};