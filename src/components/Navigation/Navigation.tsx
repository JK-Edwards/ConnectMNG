import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";

import logo from "../../images/logo.png";
import NavDropdown from "../Dropdowns/NavDropdown/NavDropdown";
import Mobile from "../Mobile/Mobile";
import NavLink from "./NavLink";

import "./Navigation.css";

export default function Navigation(): JSX.Element {
  const intl = useIntl();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showResources, setShowResources] = useState<boolean>(false);
  const [showActivities, setShowActivities] = useState<boolean>(false);
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 768;
      setIsMobile(isNowMobile);
      setShowMobileMenu(isNowMobile);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleVolunteerSelect = () => {
    setShowActivities(!showActivities);
    setShowResources(false);
    setShowAbout(false);
  };

  const handleResourcesSelect = () => {
    setShowResources(!showResources);
    setShowActivities(false);
    setShowAbout(false);
  };

  const handleAboutSelect = () => {
    setShowAbout(!showAbout);
    setShowActivities(false);
    setShowResources(false);
  };

  const handleNavLinkSelect = (index: number) => {
    setActiveIndex(index);
    setShowActivities(false);
    setShowResources(false);
    setShowAbout(false);
  };

  const handleDropdownSelect = (selectedIndex: number) => {
    setShowActivities(false);
    setShowResources(false);
    setShowAbout(false);
    setActiveIndex(selectedIndex + 6);
  };

  return (
    <div className="overallNavigationContainer">
      {isMobile ? (
        <Mobile />
      ) : (
        <div className="navigationContainer">
          <div>
            <Link to="/" onClick={() => handleNavLinkSelect(0)}>
              <img src={logo} alt="Connect MNG Logo" className="logo" />
            </Link>
          </div>
          <div>
            <NavLink
              to="/programs"
              text={intl.formatMessage({ id: "programs" })}
              className="button"
              isActive={activeIndex === 1}
              onClick={() => handleNavLinkSelect(1)}
            />
          </div>
          <div>
            <NavLink
              to="/events"
              text={intl.formatMessage({ id: "events" })}
              className="button"
              isActive={activeIndex === 3}
              onClick={() => handleNavLinkSelect(3)}
            />
          </div>
          <div>
            <NavLink
              to="/about"
              className="button"
              text={intl.formatMessage({ id: "about" })}
              onClick={handleAboutSelect}
            />
            {showAbout && (
              <NavDropdown
                onSelect={handleDropdownSelect}
                options={[
                  intl.formatMessage({ id: "ourStory" }),
                  intl.formatMessage({ id: "ourTeam" }),
                ]}
                links={["/about-us/our-story", "/about-us/our-team"]}
              />
            )}
          </div>
          <div>
            <div className="button" onClick={handleResourcesSelect}>
              {intl.formatMessage({ id: "resources" })}
            </div>
            {showResources && (
              <NavDropdown
                onSelect={handleDropdownSelect}
                options={[intl.formatMessage({ id: "blogs" })]}
                links={["/resources/blogs"]}
              />
            )}
          </div>
          <div>
            <div className="button" onClick={handleVolunteerSelect}>
              {intl.formatMessage({ id: "getInvolved" })}
            </div>
            {showActivities && (
              <NavDropdown
                onSelect={handleDropdownSelect}
                options={[
                  intl.formatMessage({ id: "donate" }),
                  intl.formatMessage({ id: "internships" }),
                  intl.formatMessage({ id: "volunteer" }),
                ]}
                links={[
                  "/get-involved/donate",
                  "/get-involved/internships",
                  "/get-involved/volunteer",
                ]}
              />
            )}
          </div>
          <div>
            <NavLink
              to="/contact-us"
              text={intl.formatMessage({ id: "contactUs" }).toUpperCase()}
              className="button contact"
              isActive={activeIndex === 6}
              onClick={() => handleNavLinkSelect(6)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
