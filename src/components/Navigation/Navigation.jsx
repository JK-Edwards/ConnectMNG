import classNames from "classnames";
import logo from "../../images/logo.png";
import React from "react";
import NavDropdown from "../Dropdowns/NavDropdown/NavDropdown";

import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import { useState } from "react";


import "./Navigation.css";
import { DropdownMenu } from "react-bootstrap";

export default function Navigation() {
	const intl = useIntl();
	const [activeIndex, setActiveIndex] = useState(0);
	const [showResources, setShowResources] = useState(false);
	const [showActivities, setShowActivities] = useState(false);
	const [showAbout, setShowAbout] = useState(false);

	function handleVolunteerSelect() {
		setShowActivities(!showActivities);
		setShowResources(false);
		setShowAbout(false);
	};

	function handleResourcesSelect() {
		setShowResources(!showResources);
		setShowActivities(false);
		setShowAbout(false);
	};

	const handleAboutSelect = () => {
		setShowAbout(!showAbout);
		setShowActivities(false);
		setShowResources(false);
	}

	function handleNavLinkSelect(activeIndex) {
		setActiveIndex(activeIndex);
		setShowActivities(false);
		setShowResources(false);
		setShowAbout(false);

	};

	function handleDropdownSelect(selectedIndex) {
		setShowActivities(false);
		setShowResources(false);
		setShowAbout(false);
		setActiveIndex(selectedIndex + 6)
	}


	return (
		<div className={"overallNavigationContainer"}>
			<div className={"navigationContainer"}>
				<div className="logo-container">
					<Link to="/" onClick={() => handleNavLinkSelect(0)}>
						<img src={logo} alt={"Connect MNG Logo"} className={"logo"} />
					</Link>
				</div>
				<div>
					<NavLink to={"/programs"}
						text={intl.formatMessage({ id: "programs" })}
						className={"button"}
						isActive={activeIndex === 1}
						onClick={() => handleNavLinkSelect(1)}
					/>
				</div>
				<div>
					<NavLink to={"/events"}
						text={intl.formatMessage({ id: "events" })}
						className={"button"}
						isActive={activeIndex === 3}
						onClick={() => handleNavLinkSelect(3)}
					/>
				</div>
				<div>
					<div className={"button"} onClick={handleAboutSelect}>
						{intl.formatMessage({ id: "about" })}
					</div>
					{showAbout ?
						<NavDropdown
							onSelect={(selectedIndex) => handleDropdownSelect(selectedIndex)}
							options={[intl.formatMessage({ id: "ourStory" }), intl.formatMessage({ id: "ourTeam" })]}
							links={["/about-us/our-story", "/about-us/our-team"]}
						/>
						: null}
				</div>
				<div>
					<div className={"button"} onClick={handleResourcesSelect}>
						{intl.formatMessage({ id: "resources" })}
					</div>
					{showResources ?
						<NavDropdown
							onSelect={(selectedIndex) => handleDropdownSelect(selectedIndex)}
							options={[intl.formatMessage({ id: "blogs" })]}
							links={["/resources/blogs"]}
						/>
						: null}
				</div>
				<div>
					<div className={"button"} onClick={handleVolunteerSelect}>
						{intl.formatMessage({ id: "getInvolved" })}
					</div>
					{showActivities ?
						<NavDropdown
							onSelect={(selectedIndex) => handleDropdownSelect(selectedIndex)}
							options={[intl.formatMessage({ id: "donate" }), intl.formatMessage({ id: "internships" }), intl.formatMessage({ id: "volunteer" })]}
							links={["/get-involved/donate", "get-involved/internships", "/get-involved/volunteer"]}
						/>
						: null}
				</div>
				<div>
					<NavLink to={"/contact-us"}
						text={intl.formatMessage({ id: "contactUs" }).toUpperCase()}
						className={"button contact"}
						isActive={activeIndex === 6}
						onClick={() => handleNavLinkSelect(6)}
					/>
				</div>
			</div>
		</div>
	);
};

function NavLink({ to, text, isActive, className, onClick }) {
	if (isActive && (className !== classNames("button", "contact"))) {
		className = classNames(className, "isActive");
	};

	return (
		<Link to={to} className={className} onClick={onClick}>
			{text}
		</Link>
	);
};