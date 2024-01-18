import classNames from "classnames"
import logo from "../../images/logo.png";
import React from "react";
import NavDropdown from "../Dropdowns/NavDropdown/NavDropdown";

import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import { useState } from "react";

import "./Navigation.css";

export default function Navigation() {
	const intl = useIntl();
	const [activeIndex, setActiveIndex] = useState(0);
	const [showResources, setShowResources] = useState(false);
	const [showActivities, setShowActivities] = useState(false);

	function handleVolunteerSelect() {
		setActiveIndex(2)
		setShowActivities(!showActivities);
	};

	function handleResourcesSelect() {
		setActiveIndex(5)
		setShowResources(!showResources);
	};

	return (
		<div className={"navigationContainer"}>
			<div>
				<Link to="/" onClick={() => setActiveIndex(0)}>
					<img src={logo} alt={"Connect MNG Logo"} className={"logo"} />
				</Link>
			</div>
			<div>
				<NavLink to={"/programs"} text={intl.formatMessage({id: "programs"})} className={"button"} isActive={activeIndex === 1} onClick={() => setActiveIndex(1)}/>
			</div>
			<div>
				<NavLink to={"/get-involved"} text={intl.formatMessage({id: "volunteer"})} className={"button volunteer"} isActive={activeIndex === 2} onClick={handleVolunteerSelect}/>
				{showActivities ? <NavDropdown onSelect={() => setShowActivities(false)} options={["Membership", "Volunteer", "Donate"]} links={["/", "/get-involved", "/donate"]}/> : null}
			</div>
			<div>
				<NavLink to={"/events"} text={intl.formatMessage({id: "Events"})} className={"button"} isActive={activeIndex === 3} onClick={() => setActiveIndex(3)}/>
			</div>
			<div>
				<NavLink to={"/about-us"} text={intl.formatMessage({id: "about"})} className={"button"} isActive={activeIndex === 4} onClick={() => setActiveIndex(4)}/>
			</div>
			<div>
				<NavLink to={"/resources"} text={intl.formatMessage({id: "resources"})} className={"button resources"} isActive={activeIndex === 5} onClick={handleResourcesSelect}/>
				{showResources ? <NavDropdown onSelect={() => setShowResources(false)} options={["Blogs", "Podcasts"]} links={["/blogs", "/"]} /> : null}
			</div>
			<div>
				<NavLink to={"/donate"} text={intl.formatMessage({id: "donate"})} className={"button donate"} isActive={activeIndex === 6} onClick={() => setActiveIndex(6)}/>
			</div>
    	</div>
	);
};

function NavLink({to, text, isActive, className, onClick}) {
	if (isActive && (className !== classNames("button", "donate"))
				 && (className !== classNames("button", "volunteer"))
				 && (className !== classNames("button", "resources"))) {
		className = classNames(className, "isActive");
	};

	return (
		<Link to={to} className={className} onClick={onClick}>
			{text}
		</Link>
	);
};