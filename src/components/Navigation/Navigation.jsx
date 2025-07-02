//import classNames from "classnames";
import logo from "../../images/logo.png";
import React from "react";
import NavDropdown from "../Dropdowns/NavDropdown/NavDropdown";

import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import { useState, useEffect } from "react";

import "./Navigation.css";
import Mobile from "../Mobile/Mobile.jsx";
import NavLink from "./NavLink.jsx";

export default function Navigation() {
	const intl = useIntl();
	const [activeIndex, setActiveIndex] = useState(0);
	const [showResources, setShowResources] = useState(false);
	const [showActivities, setShowActivities] = useState(false);
	const [showAbout, setShowAbout] = useState(false);

	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 768);

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const [showMobileMenu, setShowMobileMenu] = useState(window.innerWidth <= 768);
	useEffect(() => {
		const handleResize = () => setShowMobileMenu(window.innerWidth <= 768);

		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

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
			{isMobile ? (
				<Mobile />
			) : (
				<div className={"navigationContainer"}>
					<div>
						<Link to="/" onClick={() => handleNavLinkSelect(0)}>
							<img src={logo} alt={"Connect MNG Logo"} className={"logo"} />
						</Link>
					</div>
					<div>
						<NavLink
							to={"/programs"}
							text={intl.formatMessage({ id: "programs" })}
							className={"button"}
							isActive={activeIndex === 1}
							onClick={() => handleNavLinkSelect(1)}
						/>
					</div>
					<div>
						<NavLink
							to={"/events"}
							text={intl.formatMessage({ id: "events" })}
							className={"button"}
							isActive={activeIndex === 3}
							onClick={() => handleNavLinkSelect(3)}
						/>
					</div>
					<div>
						<NavLink className={"button"} onClick={handleAboutSelect}
							text={intl.formatMessage({ id: "about" })}
						/>
						{showAbout ? (
							<NavDropdown
								onSelect={(selectedIndex) => handleDropdownSelect(selectedIndex)}
								options={[
									intl.formatMessage({ id: "ourStory" }),
									intl.formatMessage({ id: "ourTeam" }),
								]}
								links={["/resources/blogs/welcome-blog", "/about-us/our-team"]}
							/>
						) : null}
					</div>
					<div>
						<div className={"button"} onClick={handleResourcesSelect}>
							{intl.formatMessage({ id: "resources" })}
						</div>
						{showResources ? (
							<NavDropdown
								onSelect={(selectedIndex) => handleDropdownSelect(selectedIndex)}
								options={[intl.formatMessage({ id: "blogs" })]}
								links={["/resources/blogs"]}
							/>
						) : null}
					</div>
					<div>
						<div className={"button"} onClick={handleVolunteerSelect}>
							{intl.formatMessage({ id: "getInvolved" })}
						</div>
						{showActivities ? (
							<NavDropdown
								onSelect={(selectedIndex) => handleDropdownSelect(selectedIndex)}
								options={[
									intl.formatMessage({ id: "donate" }),
									intl.formatMessage({ id: "internships" }),
									intl.formatMessage({ id: "volunteer" }),
									intl.formatMessage({ id: "mentors" }),
								]}
								links={[
									"/get-involved/donate",
									"/get-involved/internships",
									"/get-involved/volunteer",
									"/get-involved/mentors"
								]}
							/>
						) : null}
					</div>
					<div>
						<NavLink
							to={"/contact-us"}
							text={intl.formatMessage({ id: "contactUs" }).toUpperCase()}
							className={"button contact"}
							isActive={activeIndex === 6}
							onClick={() => handleNavLinkSelect(6)}
						/>
					</div>
				</div>
			)}
		</div>
	);

}