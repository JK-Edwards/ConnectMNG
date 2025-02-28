import logo from "../../images/logo.png";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import NavDropdown from "../Dropdowns/NavDropdown/NavDropdown";
import Mobile from "../Mobile/Mobile";
import NavLink from "./NavLink";
import "./Navigation.css";

interface NavLinkProps {
  to: string;
  text: string;
  isActive: boolean;
  className: string;
  onClick: () => void;
  homeButton?: boolean; 
}

export default function Navigation() {
  const intl = useIntl();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showResources, setShowResources] = useState<boolean>(false);
  const [showActivities, setShowActivities] = useState<boolean>(false);
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setShowMobileMenu(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleVolunteerSelect(): void {
    setShowActivities(!showActivities);
    setShowResources(false);
    setShowAbout(false);
  }

  function handleResourcesSelect(): void {
    setShowResources(!showResources);
    setShowActivities(false);
    setShowAbout(false);
  }

  function handleAboutSelect(): void {
    setShowAbout(!showAbout);
    setShowActivities(false);
    setShowResources(false);
  }

  function handleNavLinkSelect(index: number): void {
    setActiveIndex(index);
    setShowActivities(false);
    setShowResources(false);
    setShowAbout(false);
  }

  function handleDropdownSelect(selectedIndex: number): void {
    setActiveIndex(selectedIndex + 6);
    setShowActivities(false);
    setShowResources(false);
    setShowAbout(false);
  }

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
              homeButton={false}
            />
          </div>

          <div>
            <NavLink
              to="/events"
              text={intl.formatMessage({ id: "events" })}
              className="button"
              isActive={activeIndex === 3}
              onClick={() => handleNavLinkSelect(3)}
              homeButton={false}
            />
          </div>

          <div>
            <NavLink
              to="#"  // Placeholder 
              text={intl.formatMessage({ id: "about" })}
              className="button"
              isActive={false} 
              onClick={handleAboutSelect}
              homeButton={false}
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
            <NavLink
              to="#"
              text={intl.formatMessage({ id: "resources" })}
              className="button"
              isActive={false}
              onClick={handleResourcesSelect}
              homeButton={false}
            />
            {showResources && (
              <NavDropdown
                onSelect={handleDropdownSelect}
                options={[intl.formatMessage({ id: "blogs" })]}
                links={["/resources/blogs"]}
              />
            )}
          </div>

          <div>
            <NavLink
              to="#"
              text={intl.formatMessage({ id: "getInvolved" })}
              className="button"
              isActive={false}
              onClick={handleVolunteerSelect}
              homeButton={false}
            />
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
              homeButton={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}
