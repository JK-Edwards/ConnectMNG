import React, { useState } from 'react';
import { Link } from "react-router-dom";
import NavLink from "../Navigation/NavLink";
import MobileNavDropdown from "./MobileNavDropdown";
import { GoTriangleDown } from "react-icons/go";
import { useIntl } from "react-intl";

interface MobileDropdownProps {}

const MobileDropdown: React.FC<MobileDropdownProps> = () => {
    const intl = useIntl();
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [showResources, setShowResources] = useState<boolean>(false);
    const [showActivities, setShowActivities] = useState<boolean>(false);
    const [showAbout, setShowAbout] = useState<boolean>(false);

    const handleNavLinkSelect = (index: number): void => {
        setActiveIndex(index);
        setShowActivities(false);
        setShowResources(false);
        setShowAbout(false);
    };

    const handleVolunteerSelect = (): void => {
        setShowActivities(!showActivities);
        setShowResources(false);
        setShowAbout(false);
    };

    const handleAboutSelect = (): void => {
        setShowAbout(!showAbout);
        setShowActivities(false);
        setShowResources(false);
    };

    const handleResourcesSelect = (): void => {
        setShowResources(!showResources);
        setShowActivities(false);
        setShowAbout(false);
    };

    const handleDropdownSelect = (selectedIndex: number): void => {
        setShowActivities(false);
        setShowResources(false);
        setShowAbout(false);
        setActiveIndex(selectedIndex + 6);
    };

    return (
        <div className="mobileNavBarContainer">
            <div className="mobileNavLinks">
            <NavLink text="Home" homeButton={true} to="/" className="homeButton" />

                <Link to="/programs" className="mobileNavLink">Programs</Link>
                <Link to="/events" className="mobileNavLink">Events</Link>
                <div className="mobileNavLink" onClick={handleAboutSelect}>
                    {intl.formatMessage({ id: "about" })}
                    <GoTriangleDown />
                </div>
                {showAbout && (
                    <MobileNavDropdown
                        onSelect={handleDropdownSelect}
                        options={[
                            intl.formatMessage({ id: "ourStory" }),
                            intl.formatMessage({ id: "ourTeam" })
                        ]}
                        links={["/about-us/our-story", "/about-us/our-team"]}
                    />
                )}
                <div className="mobileNavLink" onClick={handleResourcesSelect}>
                    {intl.formatMessage({ id: "resources" })}
                    <GoTriangleDown />
                </div>
                {showResources && (
                    <MobileNavDropdown
                        onSelect={handleDropdownSelect}
                        options={[intl.formatMessage({ id: "blogs" })]}
                        links={["/resources/blogs"]}
                    />
                )}
                <div className="mobileNavLink" onClick={handleVolunteerSelect}>
                    {intl.formatMessage({ id: "getInvolved" })}
                    <GoTriangleDown />
                </div>
                {showActivities && (
                    <MobileNavDropdown
                        onSelect={handleDropdownSelect}
                        options={[
                            intl.formatMessage({ id: "donate" }),
                            intl.formatMessage({ id: "internships" }),
                            intl.formatMessage({ id: "volunteer" })
                        ]}
                        links={["/get-involved/donate", "/get-involved/internships", "/get-involved/volunteer"]}
                    />
                )}
                <Link to="/contact-us" className="mobileNavLink">Contact Us</Link>
            </div>
        </div>
    );
};

export default MobileDropdown;
