import React from 'react';
// import { Link, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import NavLink from "../Navigation/NavLink.jsx";
import MobileNavDropdown from "./MobileNavDropdown.jsx";
import { GoTriangleDown } from "react-icons/go";

import { useIntl } from "react-intl";
import { useState, useEffect } from "react";

export default function MobileDropdown() {

    const intl = useIntl();
    const [activeIndex, setActiveIndex] = useState(0);
    const [showResources, setShowResources] = useState(false);
    const [showActivities, setShowActivities] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    function handleNavLinkSelect(activeIndex) {
        setActiveIndex(activeIndex);
        setShowActivities(false);
        setShowResources(false);
        setShowAbout(false);
    };

    function handleVolunteerSelect() {
        setShowActivities(!showActivities);
        setShowResources(false);
        setShowAbout(false);
    };

    const handleAboutSelect = () => {
        setShowAbout(!showAbout);
        setShowActivities(false);
        setShowResources(false);
    }

    function handleResourcesSelect() {
        setShowResources(!showResources);
        setShowActivities(false);
        setShowAbout(false);
    };

    function handleDropdownSelect(selectedIndex) {
        setShowActivities(false);
        setShowResources(false);
        setShowAbout(false);
        setActiveIndex(selectedIndex + 6)
    }

    return (
        <div className="mobileNavBarContainer">
            <div className="mobileNavLinks">
                <NavLink text={intl.formatMessage({ id: "home" })} homeButton={true} to="/" className="homeButton" >Home</NavLink>
                <Link to="/programs" className="mobileNavLink">{intl.formatMessage({ id: "programs" })}</Link>
                <Link to="/events" className="mobileNavLink">{intl.formatMessage({ id: "events" })}</Link>
                <div className={"mobileNavLink"} onClick={handleAboutSelect}>
                    {intl.formatMessage({ id: "about" })}
                    <GoTriangleDown />
                </div>
                {showAbout ? (
                    <MobileNavDropdown
                        onSelect={(selectedIndex) => handleDropdownSelect(selectedIndex)}
                        options={[
                            intl.formatMessage({ id: "ourStory" }),
                            intl.formatMessage({ id: "ourTeam" }),
                        ]}
                        links={["/about-us/our-story", "/about-us/our-team"]}

                    />
                ) : null}

                <div className={"mobileNavLink"} onClick={handleResourcesSelect}>
                    {intl.formatMessage({ id: "resources" })}
                    <GoTriangleDown />
                </div>
                {showResources ? (
                    <MobileNavDropdown
                        onSelect={(selectedIndex) => handleDropdownSelect(selectedIndex)}
                        options={[
                            intl.formatMessage({ id: "blogs" }),
                        ]}
                        links={["/resources/blogs"]}
                    />
                ) : null}

                <div className={"mobileNavLink"} onClick={handleVolunteerSelect}>
                    {intl.formatMessage({ id: "getInvolved" })}
                    <GoTriangleDown />
                </div>
                {showActivities ? (
                    <MobileNavDropdown
                        onSelect={(selectedIndex) => handleDropdownSelect(selectedIndex)}
                        options={[
                            intl.formatMessage({ id: "donate" }),
                            intl.formatMessage({ id: "internships" }),
                            intl.formatMessage({ id: "volunteer" }),
                            intl.formatMessage({ id: "mentors"}),
                        ]}
                        links={[
                            "/get-involved/donate",
                            "/get-involved/internships",
                            "/get-involved/volunteer",
                            "/get-involved/mentors",
                        ]}
                    />
                ) : null}

                <Link to="/contact-us" className="mobileNavLink">{intl.formatMessage({ id: "contactUs" }).toUpperCase()}</Link>
            </div>
        </div>
    )


}