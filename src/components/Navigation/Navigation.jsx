import classNames from "classnames";
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
	const [showSubNav, setShowSubNav] = useState(false);
	const [subNavOptions, setSubNavOptions] = useState([]);
	const [subNavLinks, setSubNavLinks] = useState([]);

	function handleVolunteerSelect() {
		setShowActivities(!showActivities);
		setShowResources(false);
	};

	function handleResourcesSelect() {
		setShowResources(!showResources);
		setShowActivities(false);
	};

	function handleNavLinkSelect(activeIndex) {
		setActiveIndex(activeIndex);
		setShowActivities(false);
		setShowResources(false);
		setShowSubNav(false);
	};

	function handleDropdownSelect(options, links, selectedIndex) {
		setShowActivities(false);
		setShowResources(false);
		setActiveIndex(selectedIndex + 7)
		setSubNavOptions(options);
		setSubNavLinks(links);
		setShowSubNav(true);
	}

	return (
		<div className={"overallNavigationContainer"}>
			<div className={"navigationContainer"}>
				<div>
					<Link to="/" onClick={() => handleNavLinkSelect(0)}>
						<img src={logo} alt={"Connect MNG Logo"} className={"logo"} />
					</Link>
				</div>
				<div>
					<NavLink to={"/programs"}
							 text={intl.formatMessage({id: "programs"})}
							 className={"button"}
							 isActive={activeIndex === 1}
							 onClick={() => handleNavLinkSelect(1)}
					/>
				</div>
				<div>
					<div className={"button volunteer"} onClick={handleVolunteerSelect}>
						{intl.formatMessage({id: "volunteer"})}
					</div>
					{showActivities ?
						<NavDropdown onSelect={(selectedIndex) =>
										handleDropdownSelect(
											["Membership", "Volunteer", intl.formatMessage({id: "donate"})],
											["/get-involved/membership", "/get-involved/volunteer", "/donate"], selectedIndex)}
									 options={["Membership", "Volunteer", intl.formatMessage({id: "donate"})]}
									 links={["/get-involved/membership", "/get-involved/volunteer", "/donate"]}
						/>
					: null}
				</div>
				<div>
					<NavLink to={"/events"}
							 text={intl.formatMessage({id: "events"})}
							 className={"button"}
							 isActive={activeIndex === 3}
							 onClick={() => handleNavLinkSelect(3)}
					/>
				</div>
				<div>
					<NavLink to={"/about-us"}
							 text={intl.formatMessage({id: "about"})}
							 className={"button"}
							 isActive={activeIndex === 4}
							 onClick={() => handleNavLinkSelect(4)}
					/>
				</div>
				<div>
					<div className={"button resources"} onClick={handleResourcesSelect}>
						{intl.formatMessage({id: "resources"})}
					</div>
					{showResources ?
						<NavDropdown onSelect={(selectedIndex) =>
										handleDropdownSelect(
											[intl.formatMessage({id: "blogs"}), "Podcasts"],
											["/resources/blogs", "/resources/podcasts"], selectedIndex)}
									 options={[intl.formatMessage({id: "blogs"}), "Podcasts"]}
									 links={["/resources/blogs", "/resources/podcasts"]}
						/>
					: null}
				</div>
				<div>
					<NavLink to={"/donate"}
							 text={intl.formatMessage({id: "donate"})}
							 className={"button donate"}
							 isActive={activeIndex === 6}
							 onClick={() => handleNavLinkSelect(6)}
					/>
				</div>
			</div>
			<div>
				{showSubNav ?
					<SubNav options={subNavOptions}
							links={subNavLinks}
							activeIndex={activeIndex}
							setActiveIndex={setActiveIndex}
					/>
				: null}
			</div>
	</div>
	);
};

function SubNav({options, links, activeIndex, setActiveIndex})  {
	return (
		<div className={"subNavContainer"}>
			{options.map((option, index) =>
                <NavLink key={index}
						 to={links[index]}
						 text={option}
						 className={"subNavButton"}
						 isActive={activeIndex === index + 7}
						 onClick={() => setActiveIndex(index + 7)}
				/>)
			}
		</div>
	);
};

function NavLink({to, text, isActive, className, onClick}) {
	if (isActive && (className !== classNames("button", "donate"))) {
		className = classNames(className, "isActive");
	};

	return (
		<Link to={to} className={className} onClick={onClick}>
			{text}
		</Link>
	);
};