import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "../Navigation/NavLink";
import MobileNavDropdown from "./MobileNavDropdown";
import { GoTriangleDown } from "react-icons/go";
import IconWrapper from "../IconWrapper";
import { useIntl } from "react-intl";

const MobileDropdown: React.FC = () => {
  const intl = useIntl();

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showResources, setShowResources] = useState<boolean>(false);
  const [showActivities, setShowActivities] = useState<boolean>(false);
  const [showAbout, setShowAbout] = useState<boolean>(false);

  const handleNavLinkSelect = (index: number) => {
    setActiveIndex(index);
    setShowActivities(false);
    setShowResources(false);
    setShowAbout(false);
  };

  const handleVolunteerSelect = () => {
    setShowActivities(!showActivities);
    setShowResources(false);
    setShowAbout(false);
  };

  const handleAboutSelect = () => {
    setShowAbout(!showAbout);
    setShowActivities(false);
    setShowResources(false);
  };

  const handleResourcesSelect = () => {
    setShowResources(!showResources);
    setShowActivities(false);
    setShowAbout(false);
  };

  const handleDropdownSelect = (selectedIndex: number) => {
    setShowActivities(false);
    setShowResources(false);
    setShowAbout(false);
    setActiveIndex(selectedIndex + 6);
  };

  return (
    <div className="mobileNavBarContainer">
      <div className="mobileNavLinks">
        <NavLink
          text={intl.formatMessage({ id: "home" })}
          homeButton={true}
          to="/"
          className="homeButton"
        >
          Home
        </NavLink>

        <Link to="/programs" className="mobileNavLink">
          {intl.formatMessage({ id: "programs" })}
        </Link>

        <Link to="/events" className="mobileNavLink">
          {intl.formatMessage({ id: "events" })}
        </Link>

        <div className="mobileNavLink" onClick={handleAboutSelect}>
          {intl.formatMessage({ id: "about" })}
          <IconWrapper icon={GoTriangleDown} />
        </div>
        {showAbout && (
          <MobileNavDropdown
            onSelect={handleDropdownSelect}
            options={[
              intl.formatMessage({ id: "ourStory" }),
              intl.formatMessage({ id: "ourTeam" }),
            ]}
            links={["/about-us/our-story", "/about-us/our-team"]}
          />
        )}

        <div className="mobileNavLink" onClick={handleResourcesSelect}>
          {intl.formatMessage({ id: "resources" })}
          <IconWrapper icon={GoTriangleDown} />
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
          <IconWrapper icon={GoTriangleDown} />
        </div>
        {showActivities && (
          <MobileNavDropdown
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

        <Link to="/contact-us" className="mobileNavLink">
          {intl.formatMessage({ id: "contactUs" }).toUpperCase()}
        </Link>
      </div>
    </div>
  );
};

export default MobileDropdown;
